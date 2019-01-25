import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ItemService } from './item.service';
import { map, switchMap } from 'rxjs/operators';
import { AddItem, AddItemSuccess, DeleteItem, DeleteItemSuccess, LoadItemListSuccess } from './item.actions';
import { Todo } from '../todo';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions,
              private service: ItemService) {
  }

  @Effect() addTodo$ = this.actions$.pipe(
    ofType('ADD_ITEM'),
    map((action: AddItem) => action.payload as string),
    switchMap((payload: string) => this.service.addItem(payload).pipe(
      map(() => new AddItemSuccess())
    )));

  @Effect() loadTodos$ = this.actions$.pipe(
    ofType('LOAD_ITEM_LIST'),
    switchMap(() => this.service.loadItemList().pipe(
      map((res: string[]) => (new LoadItemListSuccess(res)))
    )));

  @Effect() deleteTodo$ = this.actions$.pipe(
    ofType('DELETE_ITEM'),
    map((action: DeleteItem) => action.payload),
    switchMap((payload: string) => {
      console.log(payload);
      return this.service.deleteItem(payload).pipe(
        map(() => new DeleteItemSuccess())
      );
    }));
}
