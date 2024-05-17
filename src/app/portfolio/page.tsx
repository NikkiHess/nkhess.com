import type { Metadata } from "next";
import FiltersTable from "../components/filters";
import Projects from "../components/projects";
import portfolioStyles from "../../../styles/portfolio.module.css";

export const metadata: Metadata = {
    title: "Portfolio - Nikki Hess",
    description: "Nikki Hess's projects",
}

const Home = () => (
  <div>
    <label id={portfolioStyles.search}> Search: <input type="search" name="search" maxLength={30}></input></label>

    <FiltersTable/>

    <Projects/>
  </div>
);

export default Home;