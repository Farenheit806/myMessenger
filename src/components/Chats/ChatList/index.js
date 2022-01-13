import { List } from "@mui/material";
import { Form } from "../../Form";
import {ChatItem} from "./ChatItem";


export const ChatList = ({chats, onDeleteChat, onAddChat}) => (
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
)