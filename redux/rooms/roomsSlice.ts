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
    addMessage(
      state,
      action: PayloadAction<{roomId: string; message: MessageType}>,
    ) {
      state.rooms = state.rooms.map((room, index) => {
        if (room._id === action.payload.roomId) {
          room.messages.push(action.payload.message);
        } else {
          return room;
        }
      });
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
