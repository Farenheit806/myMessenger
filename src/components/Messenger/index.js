import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MessageList from "../MessageList";
import {Form} from "../Form";
import { addMessageWithReply,deleteMessage } from '../../store/messages/actions';
import { selectMessages } from '../../store/messages/selectors';
import { selectChats } from '../../store/chats/selectors';
import { selectProfile } from '../../store/profile/selectors';

import './style.scss';

function Messenger() {
  const { chatId }=useParams();
  const { userName } = useSelector(selectProfile);
  const messages = useSelector(selectMessages);
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const chatName = chats?.find(chat => chat.id === chatId)?.name

  const onAddMessage = (newMessage, chatId) => {
    dispatch(addMessageWithReply(newMessage, chatId))
  }

  const onDeleteMessage = (event) => {
    const messageToDelete = messages[chatId].find(message => message.id === event.target.name);
    dispatch(deleteMessage(messageToDelete,chatId));
  }

  const handleSubmit = (text) => {
    const newMessage = {text:text, author: userName,id: `msg-${Date.now()}`};
    onAddMessage(newMessage, chatId);
  }

  useEffect(() => {
    if (messages[chatId].length == 0) {
      onAddMessage({text:`Hello! This is bot from ${chatName}! Text me!`, author: "Bot",id: `msg-${Date.now()}`}, chatId)
    }
  })

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className='App_messenger'>
        <MessageList userName={userName} messages = {messages[chatId]} chatName={chatName} onDeleteMessage={onDeleteMessage}/>
        <Form onSubmit={handleSubmit} text="Введите сообщение" btnText="Отправить"/>
    </div>
  );
}

export default Messenger;
