import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { someObject: { a: "c" } },
  reducers: {
    updateSomeObject: (state, action) => {
      // const validPayload = JSON.parse(JSON.stringify(action.payload));
      return {
        ...state,
        someObject: action.payload,
      };
    },
  },
});

export const dataActions = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
