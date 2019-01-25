import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { AppState } from '../app.reducers';
import { select, Store } from '@ngrx/store';
import { DeleteItem, LoadItemList } from '../store/item.actions';
import { map } from 'rxjs/operators';
import { TodoState } from '../store/item.reducers';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  list$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadItemList());

    this.list$ = this.store.pipe(select('todoState')).pipe(
      map((state: TodoState) => state && state.todoList));
  }

  onRemoveItem(item: string): void {
    console.log(item);
    this.store.dispatch(new DeleteItem(item));
  }
}
