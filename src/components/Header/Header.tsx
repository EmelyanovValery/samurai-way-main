import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";


const Header = (props:HeaderContainerPropsType) => {
    return (
        <header className={classes.header}>

            <img
                src="https://fikiwiki.com/uploads/posts/2022-02/1645039733_10-fikiwiki-com-p-kartinki-logotipov-10.jpg"
                alt="Logo"/>
            <div className={classes.authBlock} >
                {props.authDate.isAuth ? <div>{props.authDate.login} email: {props.authDate.email}</div> :<NavLink to={"/login"}>LOGIN</NavLink>}
            </div>
        </header>
    );
};

export default Header;