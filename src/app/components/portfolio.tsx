"use client";

import React, { useState } from "react";
import FiltersTable from "../components/filters";
import Projects from "../components/projects";
import portfolioStyles from "../../../styles/portfolio.module.css";

export default function Portfolio() {
    const [searchQuery, setQuery] = useState("");
    const [filters, setFilters] = useState({visibility: "all", type: "all", scope: "all"});

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