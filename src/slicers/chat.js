import { createSlice } from '@reduxjs/toolkit';

export const chatSilcer = createSlice({
  name: 'authenticate',
  initialState: {
    chatId: null,
    receiver: {
      id: null,
      displayName: null,
    },
  },
  reducers: {
    changeChat: (state, action) => {
      const { chatId, displayName, receiverId } = action.payload;
      state.chatId = chatId;
      state.receiver.id = receiverId;
      state.receiver.displayName = displayName;
    },
    clearChat: (state) => {
      state.chatId = null;
      state.receiver.id = null;
      state.receiver.displayName = null;
    },
  },
});

export const { changeChat, clearChat } = chatSilcer.actions;

export default chatSilcer.reducer;
