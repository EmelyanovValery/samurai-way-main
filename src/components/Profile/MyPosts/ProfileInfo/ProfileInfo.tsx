import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.headerImg}
                     src="https://bigrating.ru/wp-content/uploads/2021/01/gora-elbrus.jpg"
                     alt=""/>
            </div>
            <div>ava</div>
        </div>
    );
};

export default ProfileInfo;