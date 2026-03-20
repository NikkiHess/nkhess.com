"use client";

import { useState } from "react";

import CharacterDetailsInput from "./characterDetailsInput";
import CharacterSheetIcon from "./characterSheetIcon";
import Toggleable from "./toggleable";

import charSheetStyles from "../../styles/characterSheetCreator.module.css"

const defaultCharSheetFormValues = {
  characterName: "",
  background: "",
  classAndLevel: "",
  species: "",
  subclass: "",
  age: 0,
  height: "",
  weight: 0,
  eyes: "",
  hair: "",
  skin: "",
  distinguishingFeatures: "",
  iconType: "App",
  iconName: "Unknown"
}
// auto populate CharSheetFormValues types from the defaults
type CharSheetFormValues = typeof defaultCharSheetFormValues;

export default function CharacterSheetCreator() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // default to true

  const [sheetData, setSheetData] = useState<CharSheetFormValues>(defaultCharSheetFormValues);

  function updateField(field: keyof CharSheetFormValues, value: string | Number) {
    setSheetData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div id={charSheetStyles.charSheetBody}>
      <div id={charSheetStyles.charSheetControls}>
        <h2>Options</h2>
        
        <Toggleable
          toggleNamePascalCase="Header"
          onToggle={(checked) => {
            setIsHeaderVisible(checked)
          }}
        />
      </div>
      <div id={charSheetStyles.charSheetFormWrapper}>
        {/* allows us to send information to detailsInput.tsx, which uses the register function for us. */}
        {/* handleSubmit validates inputs before running onSubmit */}
        <div id={charSheetStyles.charSheetForm}>
          <h1 
            id={charSheetStyles.charSheetHeader}
            className={isHeaderVisible ? "" : charSheetStyles.collapsedGridItem}
          > D&D 5.5e Character Sheet</h1>
          <div id={charSheetStyles.charDetails}>
            <div id={charSheetStyles.charDetailsL}>
              <CharacterDetailsInput name="Character Name"/>
              <CharacterDetailsInput name="Background"/>
              <CharacterDetailsInput name="Class / Level" onUpdate={((value) => {
                updateField("iconType", "Class");
                updateField("iconName", value);
              })}/>
              <CharacterDetailsInput name="Species"/>
              <CharacterDetailsInput name="Subclass"/>
            </div>
            <div id={charSheetStyles.iconAndLevel}>
              <CharacterSheetIcon iconType={sheetData.iconType} iconName={sheetData.iconName}/>
              <div id={charSheetStyles.level}>

              </div>
            </div>
            <div id={charSheetStyles.charDetailsR}>
              <CharacterDetailsInput name="Age"/>
              <CharacterDetailsInput name="Height"/>
              <CharacterDetailsInput name="Weight"/>
              <CharacterDetailsInput name="Eyes"/>
              <CharacterDetailsInput name="Hair"/>
              <CharacterDetailsInput name="Skin"/>
              <CharacterDetailsInput name="Distinguishing Features"/>
            </div>
          </div>
          <div id={charSheetStyles.charAbilities}>
            <div id={charSheetStyles.charAbilityScores}>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}