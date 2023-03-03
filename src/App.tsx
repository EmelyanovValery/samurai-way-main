import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ActionsType, stateType} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {
    store: ReduxStoreType
    // addPost:()=>void
    // updateNewPost:(text:string)=>void
    // addMessage:()=>void
    // updateNewMessage:(newMessage:string) =>void
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route render={() => <Profile
                    />} path='/Profile'/>
                    <Route render={() => <DialogsContainer
                        // store={props.store}
                    />} path="/Dialogs"/>
                    <Route render={() => <UsersContainer
                        // store={props.store}
                    />} path="/Users"/>
                    <Route render={() => <Music/>} path="/Music"/>
                    <Route render={() => <News/>} path="/News"/>
                    <Route render={() => <Settings/>} path="/Settings"/>
                </div>
            </div>
        )
}


export default App;
