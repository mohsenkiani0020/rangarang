import { Option } from "@/models/productModel";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SecondLevelDependency {
  fieldId: string;
  option: Option | null;
}

interface SecondLevelDependencyRedux {
  data: SecondLevelDependency[];
}

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

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default secondLevelDependency.reducer;
export const { handleAddSecondLevelDependency } = secondLevelDependency.actions;
