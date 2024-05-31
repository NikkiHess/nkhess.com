import React from "react";
import type { Metadata } from "next";
import Portfolio from "../components/portfolio";

export const metadata: Metadata = {
    title: "Portfolio - Nikki Hess",
    description: "Nikki Hess's projects",
}

const PortfolioPage: React.FC<{}> = () => {
  return(
    <Portfolio/>
  )
}

export default PortfolioPage;