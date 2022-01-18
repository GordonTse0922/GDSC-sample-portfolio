import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Gordon's samplefolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A sample site for GDSC Web CV Workshop', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Gordon',
  subtitle: 'I am a DevOps enthuathist',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://gordontse0922.github.io/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: '',
    info: '',
    info2: '',
    url: 'https://gordontse0922.github.io/',
    repo: 'https://github.com/GordonTse0922/GordonTse0922.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  text: '',
  btnName: '',
  email: 'tsehoyin.gordon@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ho-yin-tse/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GordonTse0922',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
