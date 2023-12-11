import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const carsApi = axios.create({
  baseURL: 'https://6576c4570a1572c04ea8415f.mockapi.io/',
});

export const fetchAdvertsThunk = createAsyncThunk(
  'fetchAdverts',
  async ({ limit, make }, thunkAPI) => {
    try {
      const { data } = await carsApi.get(
        `/adverts?page=1&limit=${limit}&make=${make}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
