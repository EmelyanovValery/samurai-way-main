import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import {ActionsType, messagesPagesType} from "../../redux/state";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";



type DialogsPropsType={
    messagePageDataType: messagesPagesType
    dispatch: (action: ActionsType) => void
    // addMessage:()=>void
    // updateNewMessage:(newMessage:string) =>void
}
const newMessage=React.createRef<HTMLTextAreaElement>()

const Dialogs = (props:DialogsPropsType) => {
    const onChangeMessageTextHandler = () => {
        if(newMessage.current) {
            //props.updateNewMessage(newMessage.current.value)
            props.dispatch(updateNewMessageAC(newMessage.current.value))
        }
    }

    const onClickAddMassage = () => {
       // props.addMessage()
        props.dispatch(addMessageAC())
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.messagePageDataType.dialogsData.map(el=>(<DialogItems id={el.id} name={el.name}/>))}
            </div>
            <div className={classes.messages}>
                {props.messagePageDataType.messagesData.map(el=>(<Message message={el.message}/>))}
                <div><textarea ref={newMessage} onChange={onChangeMessageTextHandler}  value={props.messagePageDataType.newMessageData}></textarea>
                    <button onClick={()=>{onClickAddMassage()}}>+</button></div>
            </div>
        </div>
    );
};

export default Dialogs;