import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addStory, HomeApi, getStory, updateStory } from '../../components/Api';

const initialState = {
  status: 'idle',
  stories: [],
  story: {},
};

export const createStory = createAsyncThunk(
  'story/createStory',
  async ({ data, successCB }) => {
    const response = await addStory(data);

    successCB(response.data);
    return response.data;
  }
);

export const updateAStory = createAsyncThunk(
  'story/updateAStory',
  async ({ id, data, successCB }) => {
    console.log('hi');
    const response = await updateStory(id, data);
    console.log('hi');
    successCB(response.data);
    return response.data;
  }
);

export const getAStory = createAsyncThunk(
  'story/getAStory',
  async ({ id, successCB }) => {
    const response = await getStory(id);
    successCB(response.data);
    return response.data;
  }
);

export const getStories = createAsyncThunk('story/getStories', async () => {
  const response = await HomeApi();
  return response.data;
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
        state.stories.unshift(obj);
      })
      .addCase(getStories.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getStories.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getStories.fulfilled, (state, action) => {
        state.stories = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getAStory.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getAStory.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getAStory.fulfilled, (state, action) => {
        state.story = action.payload;
        state.status = 'succeeded';
      })
      .addCase(updateAStory.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(updateAStory.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateAStory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.stories.findIndex(
          (item) => item.id === action.payload.id
        );
        state.stories[index] = action.payload;
      });
  },
});

export const { updateStatus } = storySlice.actions;

export default storySlice.reducer;

export const selectAllstory = (state) => state.story.stories;
