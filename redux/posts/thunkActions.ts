import client from '../../utils/feathersClient';
import {AppThunk} from '../store';
import {getPostsFailure, getPostsStart, getPostsSuccess} from './postsSlice';

export const getPosts = (): AppThunk => async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const response = await client.service('posts').find({
      $sort: {
        createdAt: -1,
      },
    });
    console.log(response.data);
    dispatch(getPostsSuccess(response.data));
  } catch (error) {
    console.error(error);
    dispatch(getPostsFailure('Get Posts Failure'));
  }
};
