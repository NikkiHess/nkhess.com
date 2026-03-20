"use client"; 

import { useState } from "react";

import Image from 'next/image';

import charSheetStyles from "../../styles/characterSheetCreator.module.css";
import commonStyles from "../../styles/common.module.css";

const GITHUB_ICON_BASE_URL = "https://raw.githubusercontent.com/intrinsical/tw-dnd/e37ffdccda72f5668732414ee1eca6ef7b0e2d9e/icons/";
const APP_ICON_BASE_URL = "/images/characterSheet/icons/"

interface ModalProps {
  isOpen: boolean,
  closeCallback: CallableFunction
}

export function CharacterSheetIconPickerModal(props: ModalProps) {
  return props.isOpen && (
    <div className={commonStyles.modalOverlay} onClick={() => props.closeCallback()}>
      <div className={commonStyles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={commonStyles.modalScroll}>
          
          <button onClick={() => props.closeCallback()}> Close </button>
        </div>
      </div>
    </div>
  );
}

interface CharacterSheetIconProps {
    iconType: string,
    iconName: string
}

export default function CharacterSheetIcon(props: CharacterSheetIconProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const iconTypeLower = props.iconType.toLowerCase();
  const iconNameLower = props.iconName.toLowerCase();

  return (
    <>
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
            className={charSheetStyles.hoverable}
            fill={true}
            unoptimized // cuz svg
            onClick={() => {setIsModalOpen(true)}}
        />
      </div>

      <CharacterSheetIconPickerModal
        isOpen={isModalOpen}
        closeCallback={() => setIsModalOpen(false)}
      />
    </>
  );
};
