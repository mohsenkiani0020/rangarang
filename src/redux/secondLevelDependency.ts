import {
  SecondLevelDependency,
  SecondLevelDependencyRedux,
} from "@/models/secondLevelDependencyRedux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: SecondLevelDependencyRedux = {
  data: [],
};
export const secondLevelDependency = createSlice({
  name: "secondLevelDependency",
  initialState,
  reducers: {
    handleAddSecondLevelDependency: (
      state,
      action: PayloadAction<SecondLevelDependency>
    ) => {
      const existingIndex = state.data.findIndex(
        (item) => item.fieldId === action.payload.fieldId
      );

      if (existingIndex !== -1) {
        state.data[existingIndex] = action.payload;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export default secondLevelDependency.reducer;
export const { handleAddSecondLevelDependency } = secondLevelDependency.actions;
