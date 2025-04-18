import ProductRedux from "@/models/productRedux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductRedux = {
  data: {
    title: "",
    description: "",
    basePrice: 0,
    currency: "ریال",
    sections: [],
    priceRules: [],
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default productSlice.reducer;
