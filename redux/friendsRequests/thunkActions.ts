import client from '../../utils/feathersClient';
import {AppThunk} from '../store';
import {
  getFriendShipRequestsFailure,
  getFriendShipRequestsStart,
  getFriendShipRequestsSuccess,
} from './friendsRequestsSlice';

export const getFriendSipRequests = (userId: string): AppThunk => async (
  dispatch,
) => {
  dispatch(getFriendShipRequestsStart());
  try {
    const response = await client.service('friendship-request').find({
      query: {
        $or: [{sender: userId}, {reciever: userId}],
      },
    });
    const requestsRecieved = response.data.filter(
      (r: any) => r.reciever._id === userId,
    );
    const requestsSent = response.data.filter(
      (r: any) => r.sender._id === userId,
    );
    dispatch(getFriendShipRequestsSuccess({requestsRecieved, requestsSent}));
  } catch (error) {
    console.error(error);
    dispatch(getFriendShipRequestsFailure('FriendShipRequests Error'));
  }
};
