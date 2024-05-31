"use client";

import React, {Component} from "react";
import FiltersTable from "../components/filters";
import Projects from "../components/projects";
import portfolioStyles from "../../../styles/portfolio.module.css";

interface PortfolioState {
    searchQuery: string;
}

class Portfolio extends Component<{}, PortfolioState> {
    constructor(props: {}) {
        super(props);
        this.state = {
        searchQuery: ""
        }
    }

    handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchQuery: event.target.value });
    };

    render(): React.ReactNode {
        return(    
        <div>
            <label htmlFor={portfolioStyles.search}> Search: </label>
            
            <input 
            type="search" 
            name="search"
            id={portfolioStyles.search}
            maxLength={30}
            value={this.state.searchQuery}
            onChange={this.handleSearchInputChange}
            />

            <FiltersTable/>

            <Projects searchQuery={this.state.searchQuery}/>
        </div>
        )
    }
}

export default Portfolio;