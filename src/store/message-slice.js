import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: { messages: [] },
  reducers: {
    fetchMessages(state, { payload }) {
      state.messages = payload;
    },
    sendMessage(state, { payload }) {
      const newMessage = state.messages.find(
        (item) => item.username === "hossein"
      );
      newMessage.chat_messages_id = Math.random() + newMessage.chat_messages_id;
      newMessage.message = payload;
      newMessage.created_at = new Date().toISOString();
      state.messages.push(newMessage);
      console.log(state.messages);
    },
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice;
