import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addStory, HomeApi } from '../../components/Api';

const initialState = {
  status: 'idle',
  story: [],
};

export const createStory = createAsyncThunk(
  'story/createStory',
  async ({ data, successCB }) => {
    const response = await addStory(data);
    console.log('first');
    successCB(response.data);
    console.log('second');
    return response.data;
  }
);

export const getStories = createAsyncThunk('story/getStories', async () => {
  const response = await HomeApi();
  return response;
});

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    updateStatus: (state) => {
      state.status = 'idle';
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createStory.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(createStory.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createStory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('how are u');
        console.log(action.payload);
        const obj = {
          Title: { title: action.payload.title },
          text: action.payload.thought.text,
          creator: action.payload.creator,
        };
        state.story.unshift(obj);
      })
      .addCase(getStories.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getStories.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getStories.fulfilled, (state, action) => {
        state.story = action.payload;
        state.status = 'succeeded';
      });
  },
});

export const { updateStatus } = storySlice.actions;

export default storySlice.reducer;

export const selectAllstory = (state) => state.story.story;
