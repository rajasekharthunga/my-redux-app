// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/motors/MotorSlice';

const store = configureStore({
  reducer: {
    motor: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
