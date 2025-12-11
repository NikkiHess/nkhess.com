import type { Metadata } from 'next';
import indexStyles from '../../styles/index.module.css';

const bulletDescription = [
  "Graduated from **University of Michigan** with a **BS in Computer Science**",
  "Currently an **IT Support Specialist **at University of Michigan",
  "Hobbyist **Game Developer**",
  "Working on a new game called **Creaturesque**"
];

// for the Discord embed
const bulletedBulletDescription = bulletDescription.map((element, index) => {
  if(index % 2 == 0) { // even gets outline star
    return "☆ " + element;
  }
  else {
    return "★ " + element;
  }
});
const bulletedBulletString = bulletedBulletDescription.join("\n")

export const metadata: Metadata = {
  title: "Home - Nikki Hess",
  description: "Nikki Hess's portfolio site homepage!",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nikki Hess's Portfolio",
    description: bulletedBulletString,
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

/**
 * Replaces **string** with <b>string</b>
 * @param bulletItem the item to make bold
 * @returns string — the handled string
 */
function handleBoldMarkdown(bulletItem: string): string {
  const boldRegex: RegExp = /(\*\*)(.*?)(\*\*)/g
  const matches = bulletItem.matchAll(boldRegex);
  
  matches.forEach(match => {
    bulletItem = bulletItem.replace(match[0], "<b>" + match[2] + "</b>");
  });

  return bulletItem;
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
          {bulletDescription.map((item, index) => (
            <li 
              key={index}
              dangerouslySetInnerHTML={{ __html: handleBoldMarkdown(item) }}
            />
          ))}
        </ul>
      </div>

      <iframe
        id={indexStyles.itchEmbed}
        src="https://itch.io/embed/2997908?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=4492c9&amp;border_color=ffffff"
        width="600"
        height="200"
      />

      <iframe
        id={indexStyles.itchEmbed}
        src="https://itch.io/embed/3037809?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=23b14d&amp;border_color=ffffff"
        width="600"
        height="200"
      />

      <iframe
        id={indexStyles.itchEmbed}
        src="https://itch.io/embed/3303145?linkback=true&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=00c2ff&amp;border_color=ffffff"
        width="600"
        height="200"
      />
    </div>
  </div>
);

export default Home;