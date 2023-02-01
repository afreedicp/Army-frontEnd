import { configureStore } from '@reduxjs/toolkit';
import storyReducer from './Story/storySlice';

const store = configureStore({
  reducer: {
    story: storyReducer,
  },
});

export default store;
