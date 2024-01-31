import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MotorState {
  motorsData: string[];
}

const initialState: MotorState = {
  motorsData: [],
};

const motorSlice = createSlice({
  name: "motor",
  initialState,
  reducers: {
    updateMotorsData: (state, action) => {
      state.motorsData = [...state.motorsData, action.payload];
    },
  },
});

export const { updateMotorsData } = motorSlice.actions;
export default motorSlice.reducer;
