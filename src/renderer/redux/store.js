import { configureStore } from "@reduxjs/toolkit";

import { dataReducer } from "./dataSlice";

export function createStore() {
  return configureStore({
    reducer: {
      data: dataReducer,
    },
  });
}
