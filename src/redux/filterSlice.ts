import { createSlice } from "@reduxjs/toolkit";
import { FilterVariants } from "../interface/interface";

export const filterSlice = createSlice({
  name: "filter",
  initialState: FilterVariants.all,
  reducers: {
    changeFilter: (_, { payload }) => {
      return payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
