"use client"; // mark as a client component

import React, { useState } from "react";
import commonStyles from "../../../styles/common.module.css";
import portfolioStyles from "../../../styles/portfolio.module.css";

type Option = {
    label: string;
    value: string;
  };

type RadioGroupProps = {
    name: string;
    options: Option[];
    defaultValue: string;
  };

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, defaultValue }) => {
    const [value, setValue] = useState(defaultValue);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }
  
    return (
      <td>
        {options.map((option) => (
          <div key={option.value}>
            <label>
              <input
                type="radio"
                name={name}
                value={option.value}
                onChange={handleChange}
                defaultChecked={option.value === value}
              />
              {option.label}
            </label>
          </div>
        ))}
      </td>
    );
  };

const FiltersTable: React.FC = () => {
    const visibilityOpts = [
        { label: "All", value: "all" },
        { label: "Public", value: "public" },
        { label: "Private", value: "private" }
    ];

    const typeOpts = [
        { label: "All", value: "all" },
        { label: "Game", value: "game" },
        { label: "Software", value: "software" }
    ];

    const scopeOpts = [
        { label: "All", value: "all" },
        { label: "School", value: "school" },
        { label: "Personal", value: "personal" },
        { label: "Open Source", value: "open-source" }
    ];

    return (
        <table id={portfolioStyles.filters}>
          <thead>
            <tr>
              <th>Visibility</th>
              <th>Type</th>
              <th>Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <RadioGroup name="visibility" options={visibilityOpts} defaultValue="all"/>
              <RadioGroup name="type" options={typeOpts} defaultValue="all"/>
              <RadioGroup name="scope" options={scopeOpts} defaultValue="all"/>
            </tr>
          </tbody>
        </table>
    )
}

export default FiltersTable;