import { createSelector } from "@reduxjs/toolkit";
import { FilterVariants, IState, ITodo } from "../interface/interface";

export const selectAllTodos = (state: IState): ITodo[] => state.todos.items;
export const selectFilter = (state: IState): string => state.filter;

export const selectedComplitedTodos = createSelector(
  [selectAllTodos],
  (todos) => {
    return todos.filter((todo) => todo.completed).length;
  }
);

export const selectFilteredTodos = createSelector(
  [selectAllTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case FilterVariants.all:
        return todos;
      case FilterVariants.completed:
        return todos.filter((todo) => todo.completed === true);
      case FilterVariants.incompleted:
        return todos.filter((todo) => todo.completed === false);
      default:
        return todos;
    }
  }
);
