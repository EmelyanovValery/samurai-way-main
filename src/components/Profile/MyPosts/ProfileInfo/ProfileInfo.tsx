import React from 'react';
import classes from "./ProfileInfo.module.css";
import {profileDateType} from "../../../../redux/profile-reducer";
import Preloader from "../../../common/Preloader/Preloader";

type ProfileInfoPropsType={
    profileDate:profileDateType
}
const ProfileInfo = (props:ProfileInfoPropsType) => {
    let arrContacts;
    if(props.profileDate){
    arrContacts=Object.entries(props.profileDate.contacts).sort()
    }
    return (
        <>
            {!props.profileDate ? <Preloader/> :
                <div>
                <div>
                    <img className={classes.headerImg}
                         src="https://bigrating.ru/wp-content/uploads/2021/01/gora-elbrus.jpg"
                         alt=""/>
                </div>
               <div>
                   <h3>{props.profileDate.fullName}</h3>
                   <div><img src={props.profileDate.photos.small} alt="Avataer"/></div>
               </div>
               <div>
                   <ul>
                       Контакты
                       {arrContacts ? arrContacts.map(el=><li>{el[0]} <a href={el[1]}>{el[1]}</a></li>): "Нет"}
                   </ul>

               </div>
            </div>}

        </>
    );
};

export default ProfileInfo;