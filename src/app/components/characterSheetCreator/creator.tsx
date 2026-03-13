"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import CharacterDetailsInput from "./detailsInput";
import Toggleable from "./cssToggle";

import charSheetStyles from "../../../../styles/characterSheetTemplate.module.css";

type CharSheetFormValues = {
  characterName: string,
  background: string,
  classAndLevel: string,
  species: string,
  subclass: string,
  age: Number,
  height: string,
  weight: Number,
  eyes: string,
  hair: string,
  skin: string,
  distinguishingFeatures: string
}

export default function CharacterSheetTemplate() {
  const functions = useForm<CharSheetFormValues>();
  const onSubmit: SubmitHandler<CharSheetFormValues> = (data) => console.log(data);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // default to true

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
        <FormProvider {...functions}>
          {/* handleSubmit validates inputs before running onSubmit */}
          <form onSubmit={functions.handleSubmit(onSubmit)} id={charSheetStyles.charSheetForm}>
            <h1 
              id={charSheetStyles.charSheetHeader}
              className={isHeaderVisible ? "" : charSheetStyles.collapsedGridItem}
            > D&D 5.5e Character Sheet</h1>
            <div id={charSheetStyles.charDetails}>
              <div id={charSheetStyles.charDetailsL}>
                <CharacterDetailsInput fieldName="Character Name"/>
                <CharacterDetailsInput fieldName="Background"/>
                <CharacterDetailsInput fieldName="Class / Level"/>
                <CharacterDetailsInput fieldName="Species"/>
                <CharacterDetailsInput fieldName="Subclass"/>
              </div>
              <div id={charSheetStyles.charDetailsR}>
                <CharacterDetailsInput fieldName="Age"/>
                <CharacterDetailsInput fieldName="Height"/>
                <CharacterDetailsInput fieldName="Weight"/>
                <CharacterDetailsInput fieldName="Eyes"/>
                <CharacterDetailsInput fieldName="Hair"/>
                <CharacterDetailsInput fieldName="Skin"/>
                <CharacterDetailsInput fieldName="Distinguishing Features"/>
              </div>
            </div>
            <div id={charSheetStyles.charAbilities}>
              <div id={charSheetStyles.charAbilityScores}>
                
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}