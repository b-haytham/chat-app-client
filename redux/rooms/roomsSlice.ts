import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MessageType, RoomType} from '../dataTypes';

type RoomsState = {
  loading: boolean;
  error: null | string;
  rooms: RoomType[] | null;
};

const initialState: RoomsState = {
  loading: false,
  error: null,
  rooms: null,
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    getRoomsStart(state) {
      state.loading = true;
    },
    getRoomsSuccess(state, action: PayloadAction<RoomType[]>) {
      state.loading = false;
      state.rooms = action.payload;
    },
    getRoomsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addMessage(state, action: PayloadAction<MessageType>) {
      const roomIndex = state.rooms.findIndex(
        (r) => r._id === action.payload.room,
      );
      console.log(roomIndex);
      if (roomIndex !== -1) {
        state.rooms[roomIndex].messages.push(action.payload);
      }
    },
  },
});

export const {
  getRoomsStart,
  getRoomsFailure,
  getRoomsSuccess,
  addMessage,
} = roomsSlice.actions;

export default roomsSlice.reducer;
