import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {stateType} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider, StoreContext} from "./components/StoreContext";

export let rerenderEntireTree =(state:stateType)=>{
    ReactDOM.render(<Provider store={store}>
        <BrowserRouter>
            <App
                store={store}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                // addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)}
            />
        </BrowserRouter>
    </Provider>
        ,
        document.getElementById('root')

    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
    rerenderEntireTree(store.getState())
})

