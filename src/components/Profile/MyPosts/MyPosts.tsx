import React from 'react';
import Post from "./Post/Post";
import {ActionsType} from "../../../redux/store";
import {postsDataType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postsData: postsDataType
    newPostData: string
    // dispatch: (action: ActionsType) => void
    addPost:()=>void
    updateNewPost:(text:string)=>void
}
const newPostElement = React.createRef<HTMLTextAreaElement>()

const MyPosts = (props: MyPostsPropsType) => {
    debugger
    const addPost = () => {
        props.addPost()
       // props.dispatch(addPostAC())

    }
    const onChangeTextAreaHandler = () => {
        if (newPostElement.current) {
            props.updateNewPost(newPostElement.current.value)
            // props.dispatch(updateNewPostAC(newPostElement.current.value))
        }

    }
    return (
        <div>My post
            <div><textarea ref={newPostElement} value={props.newPostData} onChange={onChangeTextAreaHandler}></textarea>
                <button onClick={() => {
                    addPost()
                }}>Add post
                </button>
            </div>
            <div>
                <Post postValue={props.postsData}/>
            </div>
        </div>
    );
};

export default MyPosts;