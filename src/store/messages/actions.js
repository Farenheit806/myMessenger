export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId
    },
});

export const deleteMessage = (mes, chatId) => ({
    type: DELETE_MESSAGE,
    payload: {
        mes,
        chatId
    },
});
let timeout;
export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
    dispatch(addMessage(newMessage, chatId));

    if (timeout) {
        clearTimeout(timeout)
    }

    if (newMessage.author !== "Bot") {
    timeout = setTimeout(() => {
        dispatch(
            addMessage({text:"Hello! This is bot!", author: "Bot",id: `msg-${Date.now()}`},chatId)
        )
    }, 1500)
}
}