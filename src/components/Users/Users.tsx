import React from 'react';
import styles from "./users.module.css";
import {userPageType} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

type UserPropsType={
    totalCount:number
    countUserOnPage:number
    currentPage:number
    users:userPageType[]
    follow:(idUser:number)=>void
    unfollow:(idUser:number)=>void
    onClickChangeCurrentPage:(currentPage:number)=>void

}

const Users = (props: UserPropsType) => {
    const countPage=Math.ceil( props.totalCount/props.countUserOnPage)
    let arrPage=[]
    for (let i = 1; i <=countPage ; i++) {
        arrPage.push(i)
    }
    const onClickChangeFallowHandler = (idUser:number, followed:boolean) => {
        followed ? props.unfollow(idUser):props.follow(idUser)
    }

    return (
        <div>
            {arrPage.map((p,index)=><span onClick={()=>props.onClickChangeCurrentPage(p)} key={index} className={p===props.currentPage ? styles.currentPage:styles.page}>{p} </span>)}
            { props.users.map(user=>
             <div key={user.id} className={styles.userContainer}>
                    <span className={styles.avatarContainer}>
                        <div><img src={user.photos.small ? user.photos.small : "https://devedu.uz/wp-content/uploads/2022/06/cropped-avatar.jpg"} alt="Avatar" className={styles.avatar}/></div>
                        <div><button onClick={()=>onClickChangeFallowHandler(user.id,user.followed)}>{user.followed ? "UNFOLLOWED":"FOLLOWED"}</button></div>
                    </span>
                    <span>
                        <span className={styles.description}>
                            <h4 >{user.name}</h4>
                            <div>{user.status}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Users;
