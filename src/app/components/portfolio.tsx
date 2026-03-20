"use client";

import React, { useState } from "react";
import FiltersTable from "../components/filters";
import Projects from "../components/projects";
import portfolioStyles from "../styles/portfolio.module.css";

// DRY
export const FILTER_KEYS = ["codeVisibility", "type", "scope"] as const; // define keys
export type FilterKey = typeof FILTER_KEYS[number]; // generate a type using those keys
export type Filters = Record<FilterKey, String>; // generate the shape
export const DEFAULT_FILTERS = FILTER_KEYS.reduce((acc, key) => {
    acc[key] = "all";
    return acc;
}, {} as Filters);

export default function Portfolio() {
    const [searchQuery, setQuery] = useState("");
    const [filters, setFilters] = useState(DEFAULT_FILTERS);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleFilterChange = (filterName: string, value: string) => {
        setFilters((prev) => ({
            ...prev, // unpack elements from prev filters, so they can be added to the Object
            [filterName]: value
        }));
    }

    return(    
        <div>
            <div className={portfolioStyles.searchDiv}>
                <label htmlFor={portfolioStyles.search} className={portfolioStyles.searchLabel}> Search </label>
                
                <input 
                    type="search"
                    name="search"
                    id={portfolioStyles.search}
                    maxLength={30}
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>

            <FiltersTable onFilterChange={handleFilterChange}/>

            <Projects searchQuery={searchQuery} filters={filters}/>
        </div>
    )
}