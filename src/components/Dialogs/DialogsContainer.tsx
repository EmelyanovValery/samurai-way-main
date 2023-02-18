import React from 'react';

import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";
import {StoreContext} from "../StoreContext";


type DialogsContainerPropsType = {
    // store: ReduxStoreType
    // messagePageDataType: messagesPagesType
    // dispatch: (action: ActionsType) => void
    // addMessage:()=>void
    // updateNewMessage:(newMessage:string) =>void
}

const DialogsContainer = (props: DialogsContainerPropsType) => {


    return <StoreContext.Consumer>
        {(store) => {
            const state = store.getState()
            const onChangeMessageTextHandler = (newMessage: string) => {
                store.dispatch(updateNewMessageAC(newMessage))
                //props.updateNewMessage(newMessage.current.value)
                // props.dispatch(updateNewMessageAC(newMessage.current.value))

            }

            const onClickAddMassage = () => {
                store.dispatch(addMessageAC())
                // props.addMessage()
                //  props.dispatch(addMessageAC())
            }
            return <Dialogs messagePageData={state.messagesPages} addMessage={onClickAddMassage}
                     updateNewMessage={onChangeMessageTextHandler}
            />}}
    </StoreContext.Consumer>

};

export default DialogsContainer;