import React from 'react';

import {addMessageAC, messagesPagesType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType, ReduxStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {StoreType} from "../../redux/store";
import {ActionsType, profilePageType} from "../../redux/profile-reducer";
import { Dispatch } from 'redux';


type DialogsContainerPropsType = {
    // store: ReduxStoreType
    // messagePageDataType: messagesPagesType
    // dispatch: (action: ActionsType) => void
    // addMessage:()=>void
    // updateNewMessage:(newMessage:string) =>void
}

// const DialogsContainer = (props: DialogsContainerPropsType) => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             const state = store.getState()
//             const onChangeMessageTextHandler = (newMessage: string) => {
//                 store.dispatch(updateNewMessageAC(newMessage))
//                 //props.updateNewMessage(newMessage.current.value)
//                 // props.dispatch(updateNewMessageAC(newMessage.current.value))
//
//             }
//
//             const onClickAddMassage = () => {
//                 store.dispatch(addMessageAC())
//                 // props.addMessage()
//                 //  props.dispatch(addMessageAC())
//             }
//             return <Dialogs messagePageData={state.messagesPages} addMessage={onClickAddMassage}
//                      updateNewMessage={onChangeMessageTextHandler}
//             />}}
//     </StoreContext.Consumer>
//
// };
const mapStateToProps = (state:AppStateType):{messagePageData:messagesPagesType} => {
  return {
      messagePageData:state.messagesPages
  }
}
type mapDispatchToPropsReturnType={
    addMessage:()=>void,
    updateNewMessage:(newMessage:string)=>void
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsReturnType => {
    return{
        addMessage:()=>{dispatch(addMessageAC())},
        updateNewMessage:(newMessage:string)=>{dispatch(updateNewMessageAC(newMessage))}
    }
}


const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer;