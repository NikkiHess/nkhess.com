import type { Metadata } from 'next';
import Image from "next/image";
import commonStyles from '../../styles/common.module.css';
import indexStyles from '../../styles/index.module.css';

export const metadata: Metadata = {
  title: "Home - Nikki Hess",
  description: "Nikki Hess's portfolio site homepage!",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nikki Hess's Portfolio",
    description: "",
    url: "https://nkhess.com/",
    images: [
      {
        url: "https://nkhess.com/images/websiteSelfie.png",
        alt: "A photo of Nikki Hess"
      },
    ],
  },
  themeColor: '#ed99a0',
}

// TODO: Investigate weird glitch at width 465

const Home = () => (
  <div id={indexStyles.homeContainer}>
    <div id={indexStyles.innerHome}>
      <div id={indexStyles.imgContainer}>
        <img src='/images/websiteSelfie.png' alt='A photo of Nikki' id={indexStyles.nikkiPikki}/>
        <div id={indexStyles.topLeftStar}>★</div>
        <div id={indexStyles.bottomRightStar}>★</div>
      </div>
      <p id={indexStyles.about}>
        Hello, my name is <b>Nikki Hess</b>! 
      </p>
      <div id={indexStyles.bulletContainer}>
        <ul id={indexStyles.bullets}>
          <li>
            Graduted from <b>University of Michigan</b> with a BS in Computer Science
          </li>
          <li>
            <b>Game Developer</b>
          </li>
          <li>
            <b>IoT Software Engineer</b> at <b>University of Michigan</b>
          </li>
          <li>
            Working on <b>a new game</b> called <b>Creaturesque</b>
          </li>
        </ul>
      </div>

      <iframe id={indexStyles.itchEmbed} src="https://itch.io/embed/2997908?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=4492c9&amp;border_color=ffffff" width="600" height="200">
        <a href="https://nkhess.itch.io/legend-of-zelda-clone">
        Legend of Zelda Clone by nkhess
        </a>
      </iframe>

      <iframe id={indexStyles.itchEmbed} src="https://itch.io/embed/3037809?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=23b14d&amp;border_color=ffffff" width="600" height="200">
        <a href="https://nkhess.itch.io/hopper">
        Hopper by nkhess
        </a>
      </iframe>

      <iframe id={indexStyles.itchEmbed} src="https://itch.io/embed/3303145?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=00c2ff&amp;border_color=ffffff"  width="600" height="200">
        <a href="https://nkhess.itch.io/the-box-dimension">
          The Box Dimension by nkhess
        </a>
      </iframe>
    </div>
  </div>
);

export default Home;