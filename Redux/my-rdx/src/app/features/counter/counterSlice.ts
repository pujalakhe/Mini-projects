import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      //we are changing/mutating our state directly which is not possible in react js
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
