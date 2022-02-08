import React from 'react';
import s from './Header.module.css';
import logo from '../../img/header/rebel.svg'


const Header = () => {
	return (
		<header className={s.header}>
			<img src={logo} alt="icon rebel alliance" />
		</header>
	)
}

export default Header;