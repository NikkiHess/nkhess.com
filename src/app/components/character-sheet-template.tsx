"use client";
import { useForm, SubmitHandler } from "react-hook-form"

type CharSheetFormValues = {
  characterName: string,
  background: string,
  classLevel: string,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("characterName")} />
      <input {...register("background")} />
      <input {...register("classLevel")} />
      <input {...register("species")} />
      <input {...register("subclass")} />
      <input {...register("age")} />
      <input {...register("height")} />
      <input {...register("weight")} />
      <input {...register("eyes")} />
      <input {...register("hair")} />
      <input {...register("skin")} />
      <input {...register("distinguishingFeatures")} />
    </form>
  )
}