import React from 'react';

import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";


type DialogsContainerPropsType = {
    store: ReduxStoreType
    // messagePageDataType: messagesPagesType
    // dispatch: (action: ActionsType) => void
    // addMessage:()=>void
    // updateNewMessage:(newMessage:string) =>void
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState()
    const onChangeMessageTextHandler = (newMessage: string) => {

        props.store.dispatch(updateNewMessageAC(newMessage))
        //props.updateNewMessage(newMessage.current.value)
        // props.dispatch(updateNewMessageAC(newMessage.current.value))

    }

    const onClickAddMassage = () => {
        props.store.dispatch(addMessageAC())
        // props.addMessage()
        //  props.dispatch(addMessageAC())
    }

    return <Dialogs messagePageData={state.messagesPages} addMessage={onClickAddMassage}
                    updateNewMessage={onChangeMessageTextHandler}/>
};

export default DialogsContainer;