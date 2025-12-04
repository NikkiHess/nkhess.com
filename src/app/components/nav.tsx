import React from 'react';
import navStyles from '../../../styles/nav.module.css'
import Image from "next/image";

const NavItem: React.FC<{ name: string; link: string; }> = ({
    name, link
}) => {
    return(
        <li className={navStyles.navItem}>
            <a href={link}>
                {name}
            </a>
        </li>
    )
}

const SocialItem: React.FC<{ name: string; link: string; imgSrc: string; hoverImgSrc: string}> = ({
    name, link, imgSrc, hoverImgSrc
}) => {
    return(
        <li className={navStyles.socialItem}>
            <a href={link} className={navStyles.imgContainer}>
                <img src={imgSrc} alt={name} className={navStyles.socialImg}/>
                <img src={hoverImgSrc} alt={name} className={`${navStyles.socialImg} ${navStyles.hoverImg}`}/>
            </a>
        </li>
    )
}

const Nav: React.FC = () => {
    return (
    <ul id={navStyles.nav}>
        <li id={navStyles.navHome}>
            <a href={"/"}>
                <img src='/images/logo.png' alt='Site Logo' id={navStyles.logo}/>
            </a>
        </li>
        
        <NavItem name="Portfolio" link="/portfolio"></NavItem>
        <NavItem name="Resume" link="/resume"></NavItem>
        <SocialItem name="GitHub" link="https://github.com/nikkihess" 
                    imgSrc="/images/social/GitHub.png" hoverImgSrc="/images/social/GitHub-hover.png">
        </SocialItem>
        <SocialItem name="LinkedIn" link="https://linkedin.com/in/thenikkihess" 
                    imgSrc="/images/social/LinkedIn.png" hoverImgSrc="/images/social/LinkedIn-hover.png">
        </SocialItem>
    </ul>
    );
}

export default Nav;