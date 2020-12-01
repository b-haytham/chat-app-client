import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostType} from '../dataTypes';

type PostsState = {
  loading: boolean;
  error: null | string;
  posts: PostType[] | null;
};

const initialState: PostsState = {
  error: null,
  loading: false,
  posts: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsStart(state) {
      state.loading = true;
    },
    getPostsSuccess(state, action: PayloadAction<PostType[]>) {
      state.loading = false;
      state.posts = action.payload;
    },
    getPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    newPost(state, action: PayloadAction<PostType>) {
      state.posts.unshift(action.payload);
    },
  },
});

export const {
  getPostsFailure,
  getPostsStart,
  getPostsSuccess,
  newPost,
} = postsSlice.actions;

export default postsSlice.reducer;
