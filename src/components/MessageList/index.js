import { Message } from "./Message";
import './style.scss';

function MessageList ({messages, chatName, onDeleteMessage, userName}) {
  
    return (
    <div className="messenger">
        <h3 className='messenger__chat-name'>{chatName}</h3>
        <div className="message-list">
        {messages.map((message) => (
            <Message message={message} userName={userName} onDeleteMessage={onDeleteMessage}/>
        ))}
        </div>
    </div>
    )
}

export default MessageList;