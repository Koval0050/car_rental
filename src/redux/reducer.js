import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsDetailAsync } from 'api/apiService';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const setLoading = state => {
  state.isLoading = true;
};

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.error;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCarsDetailAsync.pending, setLoading)
      .addCase(fetchCarsDetailAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCarsDetailAsync.rejected, setError);
  },
});

export const carsSliceReducer = carsSlice.reducer;
export const selectCars = store => store.cars;
export const selectisLoading = store => store.cars.isLoading;
export const selectError = store => store.cars.error;
