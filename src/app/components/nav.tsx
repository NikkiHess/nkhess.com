import React from 'react';
import navStyles from '../../../styles/nav.module.css'
import Image from "next/image";

interface NavItemProps {
    name: string; 
    link: string;
}

function NavItem({name, link}: NavItemProps) {
    return(
        <li className={navStyles.navItem}>
            <a href={link}>
                {name}
            </a>
        </li>
    )
}

interface SocialItemProps {
    name: string;
    link: string;
    imgSrc: string;
    hoverImgSrc: string;
}

function SocialItem({ name, link, imgSrc, hoverImgSrc}: SocialItemProps) {
    return(
        <li className={navStyles.socialItem}>
            <a href={link} className={navStyles.imgContainer}>
                <img src={imgSrc} alt={name} className={navStyles.socialImg}/>
                <img src={hoverImgSrc} alt={name} className={`${navStyles.socialImg} ${navStyles.hoverImg}`}/>
            </a>
        </li>
    )
}

export default function Nav() {
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