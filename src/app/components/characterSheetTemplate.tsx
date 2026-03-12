"use client";
import { useForm, SubmitHandler } from "react-hook-form"
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CharSheetFormValues>();
  const onSubmit: SubmitHandler<CharSheetFormValues> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div id={charSheetStyles.charSheetFormWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} id={charSheetStyles.charSheetForm}>
        <h1 id={charSheetStyles.charSheetHeader}>D&D 5.5e Character Sheet</h1>
        <div id={charSheetStyles.charDetails}>
          <div id={charSheetStyles.charDetailsL}>
            <CharacterDetailsInput fieldName="Character Name" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Background" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Class / Level" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Species" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Subclass" register={register}></CharacterDetailsInput>
          </div>
          <div id={charSheetStyles.charDetailsR}>
            <CharacterDetailsInput fieldName="Age" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Height" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Weight" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Eyes" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Hair" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Skin" register={register}></CharacterDetailsInput>
            <CharacterDetailsInput fieldName="Distinguishing Features" register={register}></CharacterDetailsInput>
          </div>
        </div>
      </form>
    </div>
  )
}