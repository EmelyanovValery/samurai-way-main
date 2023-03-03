import React from 'react';
import classes from "./Post.module.css";

type valuePostType = {
    id: string
    massage: string
    likeCount:number
}
type PostPropsType = {
    postValue: Array<valuePostType>
}
const Post = (props: PostPropsType) => {
    return (
        <div>{props.postValue.map((n,index) => (
            <div className={classes.item} key={index}>
                <img src="https://coop-land.ru/uploads/posts/2020-06/1592915877_bezimeni-1.jpg" alt=""/>
                {n.massage}
                <span> Like:{n.likeCount}</span>
            </div>))}

        </div>
    );
};
export default Post
