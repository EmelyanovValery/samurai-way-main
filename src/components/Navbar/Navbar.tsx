import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div><NavLink to="/Profile">Profile</NavLink></div>
            <div><NavLink to="/dialogs">Messages</NavLink></div>
            <div><NavLink to="/News">News</NavLink></div>
            <div><NavLink to="/Music">Music</NavLink></div>
            <div><NavLink to="/Settings">Settings</NavLink></div>
        </nav>
    );
};

export default Navbar;