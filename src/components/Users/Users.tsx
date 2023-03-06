import React from 'react';
import {userPageType, usersPageType} from "../../redux/users-reducer";
import styles from './users.module.css';
import {v1} from "uuid";
import axios from "axios";

type UsersPropsType={
    usersPageData:usersPageType
    follow:(id:number)=>void,
    unfollow:(id:number)=>void
    setUsers:(state:userPageType[])=>void
}

class Users extends React.Component<UsersPropsType, any>{
    constructor(props:UsersPropsType) {
        super(props);
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
                    debugger;
                    this.props.setUsers(response.data.items)
                })
    }
    onClickHandler = (idUser:number,followed:boolean) => {
        followed ? this.props.unfollow(idUser):this.props.follow(idUser)
    }
    render() {
        return (
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                {this.props.usersPageData.users.map(user=>
                    <div key={user.id}>
                    <span>
                        <div><img src={user.photos.small ? user.photos.small : "https://devedu.uz/wp-content/uploads/2022/06/cropped-avatar.jpg"} alt="Avatar" className={styles.avatar}/></div>
                        <div><button onClick={()=>this.onClickHandler(user.id,user.followed)}>{user.followed ? "UNFOLLOWED":"FOLLOWED"}</button></div>
                    </span>
                        <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
                    </div>
                )}
            </div>
        );
    }
}


// const Users = (props:UsersPropsType) => {
//     // if (props.usersPageData.users.length===0){
//     //     props.setUsers( [
//     //             {
//     //                 idUser: v1(),
//     //                 followed: true,
//     //                 avatarDate: "https://cs6.pikabu.ru/avatars/372/v372297.jpg?1142150410",
//     //                 dataName: {
//     //                     name: "Petr",
//     //                     lastName: "Sidorov",
//     //                 },
//     //                 address: {
//     //                     county: "Russia",
//     //                     city: "Ufa"
//     //                 },
//     //                 status: "HI"
//     //             },
//     //             {
//     //                 idUser: v1(),
//     //                 followed: true,
//     //                 avatarDate: "https://cs6.pikabu.ru/avatars/372/v372297.jpg?1142150410",
//     //                 dataName: {
//     //                     name: "Vasya",
//     //                     lastName: "Petrov",
//     //                 },
//     //                 address: {
//     //                     county: "Russia",
//     //                     city: "Kazan"
//     //                 },
//     //                 status: "YO"
//     //             },
//     //             {
//     //                 idUser: v1(),
//     //                 followed: false,
//     //                 avatarDate: "https://cs6.pikabu.ru/avatars/372/v372297.jpg?1142150410",
//     //                 dataName: {
//     //                     name: "Ivan",
//     //                     lastName: "Ivanov",
//     //                 },
//     //                 address: {
//     //                     county: "Russia",
//     //                     city: "Moscow"
//     //                 },
//     //                 status: "Good morning"
//     //             }
//     //         ]
//     //     )
//     // }
//
//     // if(props.usersPageData.users.length===0){
//     //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
//     //         debugger;
//     //         props.setUsers(response.data.items)
//     //     })
//     // }
//
//     const onClickHandler = (idUser:string,followed:boolean) => {
//         followed ? props.unfollow(idUser):props.follow(idUser)
//     }
//     return (
//         <div>
//             {props.usersPageData.users.map(user=>
//                 <div key={user.idUser}>
//                     <span>
//                         <div><img src={user.avatarDate} alt="Avatar" className={styles.avatar}/></div>
//                         <div><button onClick={()=>onClickHandler(user.idUser,user.followed)}>{user.followed ? "UNFOLLOWED":"FOLLOWED"}</button></div>
//                     </span>
//                     <span>
//                         <span>
//                             <div>{user.dataName.name} {user.dataName.lastName[0].toUpperCase()}.</div>
//                             <div>{user.status}</div>
//                         </span>
//                         <span>
//                             <div>{user.address.county}</div>
//                             <div>{user.address.city}</div>
//                         </span>
//                     </span>
//                 </div>
//             )}
//         </div>
//     );
// };

export default Users;