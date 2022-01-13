import { ListItem, ListItemText, ListItemButton, ButtonUnstyled} from '@mui/material';
import { Link } from 'react-router-dom';
import "./style.scss";

export const ChatItem = ({name, id, onDeleteChat}) => (
    <ListItem>
        <Link className='myLink' to={`/chats/${id}`}>
            <ListItemButton>
                <ListItemText>
                    {name}
                </ListItemText>            
            </ListItemButton>
        </Link>
        <button title="Не удаляйте чат, находясь в нем! Я пока не знаю, как вернуть пользователя к списку чатов =)" className='x-btn' name={id} onClick={onDeleteChat}>&#10060;</button>
    </ListItem>
)