import client from '../../utils/feathersClient';
import {AppThunk} from '../store';
import {getRoomsFailure, getRoomsStart, getRoomsSuccess} from './roomsSlice';

export const getRooms = (userId: string): AppThunk => async (dispatch) => {
  dispatch(getRoomsStart());
  try {
    const response = await client.service('rooms').find({
      query: {
        $or: [{creator: userId}, {acceptor: userId}],
      },
    });
    dispatch(getRoomsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(getRoomsFailure('ERROR GETTING ROOMS'));
  }
};
