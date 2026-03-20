"use client"; 

import { useFormContext } from "react-hook-form";

import charSheetStyles from "../../styles/characterSheetCreator.module.css";
import { camelize } from "../../utils/stringUtils";

interface CharacterDetailsInputProps {
    name: string,
    onUpdate?: (value: string) => void;
}

export default function CharacterDetailsInput(props: CharacterDetailsInputProps) {
  // https://stackoverflow.com/a/2970667
  const fieldNameCamel = camelize(props.name);

  return (
    <div id={charSheetStyles[fieldNameCamel]} className={charSheetStyles.inputDiv}>
        <input 
          id={fieldNameCamel}
          onKeyDown={(event) => {
            if(event.key === "Enter") {
                props.onUpdate?.(event.currentTarget.value);
            }
          }}
        />
        <label htmlFor={fieldNameCamel}>{props.name}</label>
    </div>
  );
};
