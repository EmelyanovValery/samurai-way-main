import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemsPropsType = {
    id: string;
    name: string
}
export const DialogItems = (props: DialogItemsPropsType) => {
    const path = "/Dialogs/" + props.id
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}