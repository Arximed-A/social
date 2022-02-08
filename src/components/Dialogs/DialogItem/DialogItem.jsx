import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={props.id}>
                <div className={s.linkDialog}>
                    <img className={s.avatar} src={props.avatar} alt=""/>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
};

export default DialogItem;