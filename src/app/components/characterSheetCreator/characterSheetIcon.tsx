"use client"; 

import { useFormContext } from "react-hook-form";

import charSheetStyles from "../../styles/characterSheetCreator.module.css";
import Image from 'next/image';

const GITHUB_ICON_BASE_URL = "https://raw.githubusercontent.com/intrinsical/tw-dnd/e37ffdccda72f5668732414ee1eca6ef7b0e2d9e/icons/";
const APP_ICON_BASE_URL = "/images/characterSheet/icons/"

interface CharacterSheetIconProps {
    iconType: string,
    iconName: string
}

export default function CharacterSheetIcon(props: CharacterSheetIconProps) {
  const iconTypeLower = props.iconType.toLowerCase();
  const iconNameLower = props.iconName.toLowerCase();

  return (
    <div id={charSheetStyles.classIcon}>
        <Image 
            src={
              props.iconType === "App" ?
              `${APP_ICON_BASE_URL}/${iconNameLower}.svg` :
              `${GITHUB_ICON_BASE_URL}/${iconTypeLower}/${iconNameLower}.svg`
            }
            alt={
              props.iconType === "App" ?
              `${props.iconName} Icon` :
              `${props.iconName} ${props.iconType} Icon by tw-dnd`
            }
            fill={true}
            unoptimized // cuz svg
        />
    </div>
  );
};
