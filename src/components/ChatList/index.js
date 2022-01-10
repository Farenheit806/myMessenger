import { List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { addChat, deleteChat} from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import {Form} from '../Form'
import {ChatItem} from './ChatItem';

import "./style.scss";

function ChatList () {
    const chats = useSelector(selectChats)
    const dispatch = useDispatch();
    
    const onAddChat = (newChatName) => {
        var newId = "default-chat-id";
        
        newChatName.indexOf(" ",[0]) !== -1 ? newId = newChatName.replace(/\s/g, '') : newId = newChatName;        

        chats?.forEach(chat => {
            if (chat.id === newId) {
               newId = `chat-${Date.now()}`;
            }
        });
        
        const newChat = {
            name: newChatName,
            id: newId,
        };

        dispatch(addChat(newChat))
    }
    const onDeleteChat = (event) => {
        const chatToDelete = chats.find(chat => chat.id === event.target.name);
        dispatch(deleteChat(chatToDelete));
        window.history.pushState({}, undefined, "/chats")
        window.location.reload()
    };
    return (
        <div className='container'>
            <div className='App'>
                <List>
                    <h3 className='chat-heading'>Список чатов</h3>
                    <div className='chat-list'>
                    {chats.length === 0 ? <p>Список пуст</p> : chats.map(({name, id}) => (
                        <ChatItem key={id} name={name} onDeleteChat={onDeleteChat} id={id}></ChatItem>
                    ))}
                    </div>
                    <h3 className='chat-heading'>Создать чат</h3>
                    <Form isFlex="vertical-form" text="Название чата" btnText="Создать" onSubmit={onAddChat}/>
                </List>
                <Outlet/>
            </div>
        </div>
    ) 
}

export default ChatList;