import React from 'react';
import styles from '../../styles/nav.module.css'

interface Props {
    pathToRoot: string;
}

const Nav: React.FC<Props> = ({ pathToRoot }) => {
    return (
    <div id='nav'>
        <li className='navHome'>
            <a href={`${pathToRoot}`}>
                <img src='images/logo.png' alt='Site Logo' className={styles.logo}></img>
            </a>
        </li>
    </div>
    );
}

export default Nav;