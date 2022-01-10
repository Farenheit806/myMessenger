export const selectChats = (state) => state.chats;
export const selectChatsByChatId = (chatId) => (state) =>
  state.chats[chatId];