import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
  'https://6569e48ede53105b0dd7d42c.mockapi.io/api/cars/carsDetail';

export const fetchCarsDetailAsync = createAsyncThunk(
  'cars/fetchCarsDetail',
  async (page = 1) => {
    const url = baseURL + `?page=${page}&limit=12`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching car details:', error);
      throw error;
    }
  }
);
