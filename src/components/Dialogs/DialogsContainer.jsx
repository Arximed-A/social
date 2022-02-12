import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    // let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    //В поста убрать ref
    let onMessageChange = (text) => {
        props.dispatch(updateNewMessageTextCreator(text))
    }
    //Тут
    let enterPush = (button) => {
        if (button.key === "Enter") {
            sendMessage()
        }
    }
    return (
        <Dialogs
            updateNewMessageTextCreator={onMessageChange}

        />
)
};

export default DialogsContainer;