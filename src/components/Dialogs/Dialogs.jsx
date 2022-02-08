import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    // let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    //В поста убрать ref
    let onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextCreator(text))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange}
                          placeholder='Enter your message'
                    // ref={newMessageElement}
                          value={props.dialogsPage.newMessageText}
                />
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;