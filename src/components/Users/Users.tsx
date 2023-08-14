import React from 'react';
import styles from "./users.module.css";
import { userPageType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    totalCount: number
    countUserOnPage: number
    currentPage: number
    users: userPageType[]
    onClickChangeCurrentPage: (currentPage: number) => void
    followingProgress:Array<number>
    unFollowTC:(userId:number)=>void
    followTC:(userId:number)=>void
}

const Users = (props: UserPropsType) => {
    const countPage = Math.ceil(props.totalCount / props.countUserOnPage)
    let arrPage = []
    for (let i = 1; i <= countPage; i++) {
        arrPage.push(i)
    }
    const onClickChangeFallowHandler = (idUser: number, followed: boolean) => {
        if (followed) {
            props.unFollowTC(idUser)
            // usersApi.deleteFollow(idUser).then(data => {
            //         if (data.resultCode === 0) {
            //             props.unfollow(idUser)
            //                 props.delFollowingProgress(idUser)
            //         }
            //     }
            // )
        } else {
            props.followTC(idUser)
            // usersApi.postFollow(idUser).then(data=>{
            //     if(data.resultCode===0){
            //         props.follow(idUser)
            //         props.delFollowingProgress(idUser)
            //     }
            //     }
            // )
        }
    }

    return (
        <div>
            {arrPage.map((p, index) => <span onClick={() => props.onClickChangeCurrentPage(p)} key={index}
                                             className={p === props.currentPage ? styles.currentPage : styles.page}>{p} </span>)}
            {props.users.map(user =>
                <div key={user.id} className={styles.userContainer}>
                    <span className={styles.avatarContainer}>
                        <div>
                            <NavLink to={`/Profile/${user.id}`}>
                                <img
                                    src={user.photos.small ? user.photos.small : "https://devedu.uz/wp-content/uploads/2022/06/cropped-avatar.jpg"}
                                    alt="Avatar" className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div><button disabled={props.followingProgress.some(el=> el===user.id)}
                            onClick={() => onClickChangeFallowHandler(user.id, user.followed)}>{user.followed ? "UNFOLLOWED" : "FOLLOWED"}</button></div>
                    </span>
                    <span>
                        <span className={styles.description}>
                            <h4>{user.name}</h4>
                            <div>{user.status}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Users;
