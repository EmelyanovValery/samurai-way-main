import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ActionsType, stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
    // addPost:()=>void
    // updateNewPost:(text:string)=>void
    // addMessage:()=>void
    // updateNewMessage:(newMessage:string) =>void
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route render={() => <Profile profilePageData={props.state.profilePage}
                                                  newPostData={props.state.profilePage.newPostData}
                                                  dispatch={props.dispatch}
                        // addPost={props.addPost}
                        // updateNewPost={props.updateNewPost}
                    />} path='/Profile'/>
                    <Route render={() => <Dialogs messagePageDataType={props.state.messagesPages}
                                                  dispatch={props.dispatch}
                                                  // updateNewMessage={props.updateNewMessage}
                                                  // addMessage={props.addMessage}
                    />} path="/Dialogs"/>
                    <Route render={() => <Music/>} path="/Music"/>
                    <Route render={() => <News/>} path="/News"/>
                    <Route render={() => <Settings/>} path="/Settings"/>
                </div>
            </div>
        </BrowserRouter>)
};


export default App;
