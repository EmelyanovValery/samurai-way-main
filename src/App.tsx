import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileActionsType} from "./redux/profile-reducer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

type AppPropsType = {
    store: ReduxStoreType
    // addPost:()=>void
    // updateNewPost:(text:string)=>void
    // addMessage:()=>void
    // updateNewMessage:(newMessage:string) =>void
    dispatch: (action: ProfileActionsType) => void
}

function App(props: AppPropsType) {

    return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer
                    />} />
                    <Route render={() => <DialogsContainer
                        // store={props.store}
                    />} path="/Dialogs"/>
                    <Route render={() => <UsersContainer
                        // store={props.store}
                    />} path="/Users"/>
                    <Route render={() => <Music/>} path="/Music"/>
                    <Route render={() => <News/>} path="/News"/>
                    <Route render={() => <Settings/>} path="/Settings"/>
                    <Route render={() => <Login/>} path="/Login"/>
                </div>
            </div>
        )
}


export default App;
