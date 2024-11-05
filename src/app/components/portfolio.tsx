"use client";

import React, {Component} from "react";
import FiltersTable from "../components/filters";
import Projects from "../components/projects";
import portfolioStyles from "../../../styles/portfolio.module.css";

interface PortfolioState {
    searchQuery: string;
    filters: {
        visibility: string;
        type: string;
        scope: string;
    }
}

class Portfolio extends Component<{}, PortfolioState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            searchQuery: "",
            filters: {
                visibility: "all",
                type: "all",
                scope: "all"
            }
        }
    }

    handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleFilterChange = (filterName: string, value: string) => {
        this.setState((prevState) => ({
            filters: {
                ...prevState.filters,
                [filterName]: value
            }
        }));
    }

    render(): React.ReactNode {
        return(    
            <div>
                <div className={portfolioStyles.searchDiv}>
                    <label htmlFor={portfolioStyles.search} className={portfolioStyles.searchLabel}> Search </label>
                    
                    <input 
                        type="search"
                        name="search"
                        id={portfolioStyles.search}
                        maxLength={30}
                        value={this.state.searchQuery}
                        onChange={this.handleSearchInputChange}
                    />
                </div>

                <FiltersTable onFilterChange={this.handleFilterChange}/>

                <Projects searchQuery={this.state.searchQuery} filters={this.state.filters}/>
            </div>
        )
    }
}

export default Portfolio;