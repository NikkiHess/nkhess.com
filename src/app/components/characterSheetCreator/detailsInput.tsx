"use client"; 

import { useFormContext } from "react-hook-form";

import charSheetStyles from "../../../../styles/characterSheetTemplate.module.css"
import { camelize } from "../../utils/stringUtils";

interface CharacterDetailsInputProps {
    fieldName: string,
}

export default function CharacterDetailsInput(props: CharacterDetailsInputProps) {
  const { register } = useFormContext();

  // https://stackoverflow.com/a/2970667
  const fieldNameCamel = camelize(props.fieldName);

  return (
    <div id={charSheetStyles[fieldNameCamel]} className={charSheetStyles.inputDiv}>
        <input {...register(fieldNameCamel)} id={fieldNameCamel}/>
        <label htmlFor={fieldNameCamel}>{props.fieldName}</label>
    </div>
  );
};
