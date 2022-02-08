import React from 'react';
import s from './Navbar.module.css';

import MenuItem from "./MenuItem/MenuItem";
// import {NavLink} from "react-router-dom";


const Navbar = (props) => {

    let menuLink = props.menuData.map(m =>
        <MenuItem
            menuName={m.menuName}
            menuIcon={m.icon}
        />)
    return (
        <nav className={s.nav}>
            {menuLink}

            {/*    <div>*/}
            {/*        <NavLink to="profile" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Profile</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="messages" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Messages</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="news" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>News</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="feed" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Feed</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="explore" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Explore</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="language" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Language</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="logout" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Logout</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="pages" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Pages</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="trending" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Trending</NavLink>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <NavLink to="music" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Music</NavLink>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to="setting" className={*/}
            {/*            navData => navData.isActive ? s.active : s.item}>Setting</NavLink>*/}
            {/*    </div>*/}

            {/*<div>Тут будет кнопка</div>*/}
        </nav>
    )
}

export default Navbar;