import { configureStore } from "@reduxjs/toolkit";
import secondLevelDependency from "@/redux/secondLevelDependency"

export const store = configureStore({
  reducer: {
    secondLevelDependency: secondLevelDependency,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
