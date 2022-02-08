import React from 'react';
import s from './MenuItem.module.css'
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {

    let menuName = props.menuName;
    let menuIcon = props.menuIcon

    return (
        <div className={s.box}>
            <NavLink to={menuName} className={navData => navData.isActive ? s.active : s.link}>
                <div className={s.container}>
                    <img className={s.icon} src={menuIcon}
                         alt="broken"/>
                    <span className={s.textMenu}>{menuName}</span>
                </div>
            </NavLink>
        </div>

    )
};
export default MenuItem;

