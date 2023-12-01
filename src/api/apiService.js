import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
  'https://6569e48ede53105b0dd7d42c.mockapi.io/api/cars/carsDetail';

export const fetchCarsDetailAsync = createAsyncThunk(
  'cars/fetchCarsDetail',
  async (page = 1, limit = 12) => {
    const url = baseURL + `?page=${page}&limit=${limit}`;
    try {
      const response = await axios.get(url);
      console.log('Response:', response);
      return response.data;
    } catch (error) {
      console.error('Error fetching car details:', error);
      throw error;
    }
  }
);
