import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {stateType, store, StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree =(state:stateType)=>{
    ReactDOM.render(
        <App  state={store._state}
                dispatch={store.dispatch.bind(store)}
              // addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)

