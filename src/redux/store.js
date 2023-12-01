import { configureStore } from '@reduxjs/toolkit';
import { carsSliceReducer } from './reducer';

export const store = configureStore({
  reducer: {
    cars: carsSliceReducer,
  },
});
