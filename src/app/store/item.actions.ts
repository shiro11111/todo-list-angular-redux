import { Action } from '@ngrx/store';
import { Todo } from '../todo';


export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAIL = 'ADD_ITEM_FAIL';
export const LOAD_ITEM_LIST = 'LOAD_ITEM_LIST';
export const LOAD_ITEM_LIST_SUCCESS = 'LOAD_ITEM_LIST_SUCCESS';
export const LOAD_ITEM_LIST_FAIL = 'LOAD_ITEM_LIST_FAIL';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAIL = 'DELETE_ITEM_FAIL';


export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: string) {}
}

export class AddItemSuccess implements Action {
  readonly type = ADD_ITEM_SUCCESS;
  constructor(public payload: any = null) {}
}

export class AddItemFail implements Action {
  readonly type = ADD_ITEM_FAIL;
}

export class LoadItemList implements Action {
  readonly type = LOAD_ITEM_LIST;
  constructor(public payload: any = null) {}
}

export class LoadItemListSuccess implements Action {
  readonly type = LOAD_ITEM_LIST_SUCCESS;
  constructor(public payload: string[]) {}
}
export class LoadItemListFail implements Action {
  readonly type = LOAD_ITEM_LIST_FAIL;
}

export class DeleteItem implements Action {
  readonly type = DELETE_ITEM;
  constructor(public payload: string) {}
}

export class DeleteItemSuccess implements Action {
  readonly type = DELETE_ITEM_SUCCESS;
}

export class DeleteItemFail implements Action {
  readonly type = DELETE_ITEM_FAIL;
}


export type ItemActions = AddItem | AddItemSuccess | AddItemFail | LoadItemList | LoadItemListSuccess | LoadItemListFail |
  DeleteItem | DeleteItemSuccess | DeleteItemFail;


