import { configureStore } from '@reduxjs/toolkit';

import photosReducer from '../pages/start-page/startPageSlice';

const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export default store;
