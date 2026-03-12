import React from "react";
import type { Metadata } from "next";
import CharacterSheetTemplate from "../components/characterSheetTemplate";


export const metadata: Metadata = {
    title: "D&D 5.5e Character Sheet Template - Nikki Hess",
    description: "A character sheet creator for D&D 5.5e (WIP)",
}

const PortfolioPage: React.FC<{}> = () => {
  return(
    <CharacterSheetTemplate/>
  )
}

export default PortfolioPage;