import React from 'react';
import navStyles from '../../styles/nav.module.css'

const Nav: React.FC = () => {
    return (
    <ul id={navStyles.nav}>
        <li id={navStyles.navHome}>
            <a href={"/"}>
                <img src='images/logo.png' alt='Site Logo' id={navStyles.logo}></img>
            </a>
        </li>
        <li className={navStyles.navItem}>
            <a href={"/portfolio"}>
                Portfolio
            </a>
        </li>
    </ul>
    );
}

export default Nav;