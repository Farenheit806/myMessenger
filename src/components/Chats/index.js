import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { addChat, deleteChat} from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import {ChatList} from './ChatList';

import "./style.scss";

function Chats () {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();
    
    const onAddChat = (newChatName) => {
        var newId;
        newChatName.indexOf(" ",[0]) !== -1 ? newId = newChatName.replace(/\s/g, '') : newId = newChatName;        

        chats?.forEach(chat => {
            if (chat.id === newId) {
               newId = `chat-${Date.now()}`;
            }
        });

        dispatch(addChat({ name: newChatName, id: newId }));
    };

    const onDeleteChat = (event) => {
        const chatToDelete = chats.find(chat => chat.id === event.target.name);
        dispatch(deleteChat(chatToDelete));
        window.history.pushState({}, undefined, "/chats");
        window.location.reload();
    };
    
    return (
        <div className='container'>
            <div className='App'>
                <ChatList chats={chats} onDeleteChat={onDeleteChat} onAddChat={onAddChat} />
                <Outlet/>
            </div>
        </div>
    ) 
}

export default Chats;