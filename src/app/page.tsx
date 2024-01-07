import type { Metadata } from 'next'
import commonStyles from '../../styles/common.module.css'
import indexStyles from '../../styles/index.module.css'

export const metadata: Metadata = {
  title: 'Home - Nikki Hess',
  description: 'Nikki Hess\'s portfolio site homepage!',
}

const Home = () => (
  <div id={indexStyles.homeContent}>
    <div id={indexStyles.innerHome}>
      <img src='images/christmas-small.png' alt='A photo of Nikki' id={indexStyles.nikkiPikki}></img>
      <p id={indexStyles.about}>
        Hello, my name is <b>Nikki Hess</b>! 
      </p>
      <ul id={indexStyles.bullets}>
        <li>
          Senior at the <b>University of Michigan</b> studying computer science
        </li>
        <li>
          <b>Game Developer</b>
        </li>
        <li>
          <b>Software Engineer</b>, focusing on backend
        </li>
        <li>
          Working on learning <b> Next.js </b>
        </li>
      </ul>
      {/* <p>
        I'm a senior at the University of Michigan 
        studying <b>computer science</b>! I'm an <b>aspiring game developer</b> and <b>software 
        engineer</b> with a focus on back-end development.
      </p>
      <p>
        I am currently trying to learn front-end development. This version of my website
        is made with <b>Next.js</b>! I'm pretty proud of how it turned out!
      </p> */}
      {/* <h1> Current Projects </h1> */}
    </div>
  </div>
);

export default Home;