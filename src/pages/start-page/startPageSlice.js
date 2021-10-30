import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async ({ rover, sol, camera }) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&perPage='6'&api_key=lmLFPvrs2bLT6sQXtcIQXYETJ7eSK8pfIJpYF98b`
      );
      return response.data;
    } catch (e) {
      return [];
    }
  }
);

export const photosAdapter = createEntityAdapter({
  selectId: ({ id }) => id,
});

export const {
  selectAll: selectAllPhotos,
  selectById: selectPhotoById,
  selectIds: selectPhotoIds,
  selectEntities: selectPhotoEntity,
} = photosAdapter.getSelectors((state) => state.photos);

const photosSlice = createSlice({
  name: 'photos',
  initialState: photosAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.status = 'loading';
    },
    [getPhotos.fulfilled]: (state, { payload }) => {
      photosAdapter.setAll(state, payload.photos);
      state.status = 'success';
    },
    [getPhotos.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default photosSlice.reducer;
