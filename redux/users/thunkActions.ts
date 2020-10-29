import client from "../../utils/feathersClient";
import { AppThunk } from "../store";
import { getSuggestedUsersFailure, getSuggestedUsersStart, getSuggestedUsersSuccess } from "./usersSlice";


export const getSuggestedUser = (): AppThunk => async dispatch => {
    
    dispatch(getSuggestedUsersStart())
    try {
        const response = await client.service('users').find()
        dispatch(getSuggestedUsersSuccess(response.data))
    } catch (error) {
        console.log(error)
        dispatch(getSuggestedUsersFailure('Error Suggested Users'))
    }
}