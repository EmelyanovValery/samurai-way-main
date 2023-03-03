import React from 'react';
import {addPostAC, profilePageType, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType, ReduxStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MyPostsContainerPropsType = {
    //store:ReduxStoreType
    // postsData: postsDataType
    // newPostData: string
    // dispatch: (action: ActionsType) => void
}

// const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState()
//             const addPost = () => {
//                 store.dispatch(addPostAC())
//
//             }
//             const updateNewPost = (text: string) => {
//                 store.dispatch(updateNewPostAC(text))
//
//             }
//             return <MyPosts postsData={state.profilePage.postsData} newPostData={state.profilePage.newPostData}
//                             updateNewPost={updateNewPost}
//                             addPost={addPost}/>
//         }}
//     </StoreContext.Consumer>
//         ;
// };
type mapStateToPropsType=profilePageType
const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
  return{
      postsData:state.profilePage.postsData,
      newPostData:state.profilePage.newPostData,
  }
}
type mapDispatchToPropsType={
    updateNewPost:(text: string) => void
        addPost:()=>void
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return{updateNewPost:(text) => {dispatch(updateNewPostAC(text))},
            addPost:() => {dispatch(addPostAC())}
    }}


const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;