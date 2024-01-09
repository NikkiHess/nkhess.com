import type { Metadata } from 'next'
import commonStyles from '../../styles/common.module.css'
import indexStyles from '../../styles/index.module.css'

export const metadata: Metadata = {
  title: 'Home - Nikki Hess',
  description: 'Nikki Hess\'s portfolio site homepage!',
}

// TODO: Investigate weird glitch at width 465

const Home = () => (
  <div id={indexStyles.homeContainer}>
    <div id={indexStyles.innerHome}>
      <div id={indexStyles.imgContainer}>
        <img src='images/christmas-small.png' alt='A photo of Nikki' id={indexStyles.nikkiPikki}></img>
        <div id={indexStyles.topLeftStar}>★</div>
        <div id={indexStyles.bottomRightStar}>★</div>
      </div>
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
    </div>
  </div>
);

export default Home;