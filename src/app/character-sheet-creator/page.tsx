import React from "react";
import type { Metadata } from "next";
import CharacterSheetCreator from "../components/characterSheetCreator/characterSheetCreator";


export const metadata: Metadata = {
    title: "D&D 5.5e Character Sheet Template - Nikki Hess",
    description: "A character sheet creator for D&D 5.5e (WIP)",
}

export default function PortfolioPage() {
  // CharacterSheetTemplate is separate here because it's a client component
  return(
    <CharacterSheetCreator/>
  )
}