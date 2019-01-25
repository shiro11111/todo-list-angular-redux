import * as fromTodoState from './store/item.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './store/item.reducers';

export interface AppState {
  todoState: fromTodoState.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todoState: todoReducer
};


