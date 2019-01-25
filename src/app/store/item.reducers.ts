import { Todo } from '../todo';
import {
  ADD_ITEM,
  ADD_ITEM_FAIL,
  ADD_ITEM_SUCCESS, DELETE_ITEM, DELETE_ITEM_FAIL, DELETE_ITEM_SUCCESS,
  ItemActions,
  LOAD_ITEM_LIST,
  LOAD_ITEM_LIST_FAIL,
  LOAD_ITEM_LIST_SUCCESS
} from './item.actions';

export interface TodoState {
  todo: string;
  todoList: string[];
  delete: string;
}

const initialState: TodoState = {
  todo: null,
  todoList: [],
  delete: null
};

export function todoReducer(state = initialState, action: ItemActions) {
  console.log(action);
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        todo: action.payload
      };
    case ADD_ITEM_FAIL:
      return {
        ...state
      };
    case LOAD_ITEM_LIST:
      return {
        ...state
      };
    case LOAD_ITEM_LIST_SUCCESS:
      return {
        ...state,
        todoList: action.payload
      };
    case LOAD_ITEM_LIST_FAIL:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        delete: action.payload
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state
      };
    case DELETE_ITEM_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
