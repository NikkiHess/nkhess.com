"use client"; 

import { useFormContext } from "react-hook-form";

import charSheetStyles from "../../../../styles/characterSheetTemplate.module.css"
import { camelize } from "../../utils/stringUtils";

interface ToggleableProps {
    toggleNamePascalCase: string,
    onToggle: (checked: boolean) => void;
}

export default function Toggleable(props: ToggleableProps) {
  const toggleNameCamel = camelize(props.toggleNamePascalCase) + "Toggle";

  return (
      <div className={charSheetStyles.visibilityToggle}>
          <input
            type="checkbox"
            id={toggleNameCamel}
            name={toggleNameCamel}
            defaultChecked={true}
            onChange={(event) => {props.onToggle(event.target.checked)}}
          />
          <label htmlFor={toggleNameCamel}> {props.toggleNamePascalCase} </label>
      </div>
  );
};
