"use client";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import charSheetStyles from "../../../styles/characterSheetTemplate.module.css";
import CharacterDetailsInput from "./characterDetailsInput";

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

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div id={charSheetStyles.charSheetFormWrapper}>
      <FormProvider {...functions}>
        <form onSubmit={functions.handleSubmit(onSubmit)} id={charSheetStyles.charSheetForm}>
          <h1 id={charSheetStyles.charSheetHeader}>D&D 5.5e Character Sheet</h1>
          <div id={charSheetStyles.charDetails}>
            <div id={charSheetStyles.charDetailsL}>
              <CharacterDetailsInput fieldName="Character Name"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Background"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Class / Level"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Species"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Subclass"></CharacterDetailsInput>
            </div>
            <div id={charSheetStyles.charDetailsR}>
              <CharacterDetailsInput fieldName="Age"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Height"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Weight"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Eyes"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Hair"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Skin"></CharacterDetailsInput>
              <CharacterDetailsInput fieldName="Distinguishing Features"></CharacterDetailsInput>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}