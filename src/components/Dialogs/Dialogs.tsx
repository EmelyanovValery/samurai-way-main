import React from 'react';
import classes from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import {messagesPagesType} from "../../redux/dialogs-reducer";



type DialogsPropsType={
    messagePageData: messagesPagesType
    // dispatch: (action: ActionsType) => void
    addMessage:()=>void
    updateNewMessage:(newMessage:string) =>void
}
const newMessage=React.createRef<HTMLTextAreaElement>()

const Dialogs = (props:DialogsPropsType) => {
    const onChangeMessageTextHandler = () => {
        if(newMessage.current) {
            //props.updateNewMessage(newMessage.current.value)
            props.updateNewMessage(newMessage.current.value)
        }
    }

    const onClickAddMassage = () => {
       // props.addMessage()
        props.addMessage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.messagePageData.dialogsData.map(el=>(<DialogItems id={el.id} name={el.name}/>))}
            </div>
            <div className={classes.messages}>
                {props.messagePageData.messagesData.map(el=>(<Message message={el.message}/>))}
                <div><textarea ref={newMessage} onChange={onChangeMessageTextHandler}  value={props.messagePageData.newMessageData}></textarea>
                    <button onClick={()=>{onClickAddMassage()}}>+</button></div>
            </div>
        </div>
    );
};

export default Dialogs;