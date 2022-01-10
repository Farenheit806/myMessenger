import './style.scss';

export const Message = ({message, onDeleteMessage, userName}) => (
    <div key={message.id} className={`message ${message.author === userName ? "message_human" : "message_bot"}` }>
        <div className='message__content'>
            <p className='message__text'>{message.text}</p>
            <p className='message__author'>{message.author}</p>
        </div>
        { message.author === userName && <button name={message.id} onClick={onDeleteMessage}>&#10060;</button> }
    </div>
);