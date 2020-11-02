import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomType } from "../dataTypes";


type RoomsState = {
    loading: boolean
    error: null | string
    rooms: RoomType[] | null 
}

const initialState: RoomsState = {
    loading: false,
    error: null,
    rooms: null
}


const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        getRoomsStart(state){
            state.loading = true
        },
        getRoomsSuccess(state, action: PayloadAction<RoomType[]>){
            state.loading = false
            state.rooms = action.payload
        },
        getRoomsFailure(state, action: PayloadAction<string>){
            state.loading = false
            state.error = action.payload
        }
    }
})


export const {
    getRoomsStart,
    getRoomsFailure,
    getRoomsSuccess
} = roomsSlice.actions
 

export default roomsSlice.reducer