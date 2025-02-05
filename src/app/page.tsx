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
        <img src='images/selfie.png' alt='A photo of Nikki' id={indexStyles.nikkiPikki}></img>
        <div id={indexStyles.topLeftStar}>★</div>
        <div id={indexStyles.bottomRightStar}>★</div>
      </div>
      <p id={indexStyles.about}>
        Hello, my name is <b>Nikki Hess</b>! 
      </p>
      <div id={indexStyles.bulletContainer}>
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

      <iframe id={indexStyles.itchEmbed} src="https://itch.io/embed/2997908?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=4492c9&amp;border_color=ffffff" width="600" height="200">
        <a href="https://thikkitv.itch.io/legend-of-zelda-clone">
        Legend of Zelda Clone by ThikkiTV
        </a>
      </iframe>

      <iframe id={indexStyles.itchEmbed} src="https://itch.io/embed/3037809?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=23b14d&amp;border_color=ffffff" width="600" height="200">
        <a href="https://thikkitv.itch.io/hopper">
        Hopper by ThikkiTV
        </a>
      </iframe>

      <iframe id={indexStyles.itchEmbed} src="https://itch.io/embed/3303145?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=00c2ff&amp;border_color=ffffff"  width="600" height="200">
        <a href="https://thikkitv.itch.io/the-box-dimension">
          The Box Dimension by ThikkiTV
        </a>
      </iframe>
    </div>
  </div>
);

export default Home;