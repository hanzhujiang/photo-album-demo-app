import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (albumId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );
  return response.data;
});

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default photosSlice.reducer;