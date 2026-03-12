"use client"; 

import { useFormContext } from "react-hook-form";

import charSheetStyles from "../../../styles/characterSheetTemplate.module.css";

interface CharacterDetailsInputProps {
    fieldName: string,
}

export default function CharacterDetailsInput({ fieldName }: CharacterDetailsInputProps) {
  const { register } = useFormContext();

  // https://stackoverflow.com/a/2970667
  const fieldNameCamel = fieldName.replace("/", "And").replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');

  return (
    <div id={charSheetStyles[fieldNameCamel]} className={charSheetStyles.inputDiv}>
        <input {...register(fieldNameCamel)} id={fieldNameCamel}/>
        <label htmlFor={fieldNameCamel}>{fieldName}</label>
    </div>
  );
};
