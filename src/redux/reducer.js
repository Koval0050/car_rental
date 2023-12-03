// reducer.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsDetailAsync } from 'api/apiService';

const initialState = {
  items: [],
  filteredItems: [], 
  isLoading: false,
  error: null,
  selectedItem: '', 
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
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    filterItems: state => {
      if (state.selectedItem) {
        state.filteredItems = state.items.filter(
          item => item.make === state.selectedItem
        );
      } else {
        state.filteredItems = state.items;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarsDetailAsync.pending, setLoading)
      .addCase(fetchCarsDetailAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const newItems = action.payload.filter(
          newItem =>
            !state.items.some(existingItem => existingItem.id === newItem.id)
        );
        state.items = state.items.concat(newItems);
        state.filteredItems = state.items;
      })
      .addCase(fetchCarsDetailAsync.rejected, setError);
  },
});

export const { setSelectedItem, filterItems } = carsSlice.actions; 
export const carsSliceReducer = carsSlice.reducer;
export const selectCars = store => store.cars;
export const selectisLoading = store => store.cars.isLoading;
export const selectError = store => store.cars.error;
export const selectFilteredItems = store => store.cars.filteredItems;
export const selectSelectedItem = store => store.cars.selectedItem;
