"use client";
import { useForm, SubmitHandler } from "react-hook-form"
import charSheetStyles from "../../../styles/characterSheetTemplate.module.css";

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
            <div id={charSheetStyles.charName} className={charSheetStyles.inputDiv}>
            <CharacterDetailsInput fieldName="Character Name" register={register}></CharacterDetailsInput>
            <div id={charSheetStyles.bg} className={charSheetStyles.inputDiv}>
              <input {...register("background")} />
              <p>Background</p>
            </div>
            <div id={charSheetStyles.classAndLevel} className={charSheetStyles.inputDiv}>
              <input {...register("classAndLevel")} />
              <p>Class / Level</p>
            </div>
            <div id={charSheetStyles.species} className={charSheetStyles.inputDiv}>
              <input {...register("species")} />
              <p>Species</p>
            </div>
            <div id={charSheetStyles.subclass} className={charSheetStyles.inputDiv}>
              <input {...register("subclass")} />
              <p>Subclass</p>
            </div>
          </div>
          <div id={charSheetStyles.charDetailsR}>
            <div id={charSheetStyles.age} className={charSheetStyles.inputDiv}>
              <input {...register("age")} />
              <p>Age</p>
            </div>
            <div id={charSheetStyles.height} className={charSheetStyles.inputDiv}>
              <input {...register("height")} />
              <p>Height</p>
            </div>
            <div id={charSheetStyles.weight} className={charSheetStyles.inputDiv}>
              <input {...register("weight")} />
              <p>Weight</p>
            </div>
            <div id={charSheetStyles.eyes} className={charSheetStyles.inputDiv}>
              <input {...register("eyes")} />
              <p>Eyes</p>
            </div>
            <div id={charSheetStyles.hair} className={charSheetStyles.inputDiv}>
              <input {...register("hair")} />
              <p>Hair</p>
            </div>
            <div id={charSheetStyles.skin} className={charSheetStyles.inputDiv}>
              <input {...register("skin")} />
              <p>Skin</p>
            </div>
            <div id={charSheetStyles.distinguishingFeatures} className={charSheetStyles.inputDiv}>
              <input {...register("distinguishingFeatures")} />
              <p>Distinguishing Features</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}