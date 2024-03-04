import { createSlice } from "@reduxjs/toolkit";
import { ITodosState } from "../interface/interface";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: ITodosState, { payload }) => {
      state.items = [...state.items, payload];
    },

    deleteTodo: (state: ITodosState, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    updateTodo: (state: ITodosState, { payload }) => {
      state.items = state.items.map((item) => {
        return item.id === payload.id ? payload : item;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
