import { ADD_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [action.payload.chatId]: [
          ...state[action.payload.chatId],
          action.payload.message,
        ],
      };
    case DELETE_MESSAGE:
      let messages = state[action.payload.chatId].filter(message => message !== action.payload.mes);

      return {
        ...state,
        [action.payload.chatId]: messages
      }
    case ADD_CHAT:
      return {
        ...state,
        [action.payload.id]: [],
      };
    default:
      return state;
  }
};