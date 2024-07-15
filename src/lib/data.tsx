import { Github, Twitter, Figma, Linkedin, Mail } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import IconAWS from '/public/images/logos/icon-aws.svg';
import IconC from '/public/images/logos/icon-c.svg';
import IconJava from '/public/images/logos/icon-java.svg';
import IconSwift from '/public/images/logos/icon-swift.svg';
import IconPython from '/public/images/logos/icon-python.svg';
import IconPyTorch from '/public/images/logos/icon-pytorch.svg';
import IconOracle from '/public/images/logos/icon-oracle.svg';
import IconFirebase from '/public/images/logos/icon-firebase.svg';
import IconR from '/public/images/logos/icon-r.svg';
import IconCSS from '/public/images/logos/icon-css.svg';
import IconHTML from '/public/images/logos/icon-html.svg';
import IconSQL from '/public/images/logos/icon-sql.png';
import IconTensorFlow from '/public/images/logos/icon-tensorflow.png';
import IconNoSQL from '/public/images/logos/icon-nosql.png';
import IconSpark from '/public/images/logos/icon-spark.png';
import IconNetX from '/public/images/logos/icon-netx.png';

import LogoLM from '/public/images/logos/logo-lm.jpeg';
import LogoUhoo from '/public/images/logos/logo-uhoo.jpeg';
import LogoLavner from '/public/images/logos/logo-lavner.jpeg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/sdberhane',
  GITHUB_REPO: 'https://github.com/sdberhane/PersonalPortfolio',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
  LETTERBOXD: 'https://letterboxd.com/sdberhane6/',
  BELI: 'https://beliapp.co/app/selassieberhane',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#work',
  },
  {
    label: 'Experiece',
    href: '#experience',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/sdberhane',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/selassie-berhane',
  },
  {
    icon: Mail,
    url: 'mailto:sberhane@seas.upenn.edu',
  },
];

// Technologies I know and will put in
/*
// Copilot pleas list out 1-24 in list format (leave out the actual content I will fill that in)
Coding languages:
1. Java
2. Python
3. JavaScript
4. C
5. Swift
6. SQL
7. R
8. CSS
9. HTML
10. Ocaml
11. React
12. Next.js
13. Node.js
14. Express.js
15. AWS
16. Firebase
17. MongoDB
18. NoSQL
19. Oracle
20. PyTorch
21. TensorFlow
22. Apache Spark
23. Figma
24. Github
*/


export const TECHNOLOGIES: TechDetails[] = [
  { label: 'Javascript', logo: LogoJavascript, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { label: 'Python', logo: IconPython, url: 'https://www.typescriptlang.org/' },
  { label: 'React', logo: LogoReact, url: 'https://react.dev/' },
  { label: 'Next.js', logo: LogoNextjs, url: 'https://nextjs.org/' },
  { label: 'Node.js', logo: LogoNodejs, url: 'https://nodejs.org/en' },
  { label: 'Express.js', logo: LogoExpress, darkModeLogo: LogoExpressLight, url: 'https://expressjs.com/' },
  { label: 'Java', logo: IconJava, url: 'https://nestjs.com/' },
  { label: 'C', logo: IconC, url: 'https://socket.io/' },
  { label: 'SQL', logo: IconSQL, url: 'https://www.postgresql.org/' },
  { label: 'MongoDB', logo: LogoMongoDB, url: 'https://www.mongodb.com/' },
  { label: 'Swift', logo: IconSwift, url: 'https://sass-lang.com/' },
  { label: 'R', logo: IconR, url: 'https://tailwindcss.com/' },
  { label: 'Figma', logo: LogoFigma, url: 'https://www.figma.com/' },
  { label: 'CSS', logo: IconCSS, url: 'https://www.cypress.io/' },
  { label: 'HTML', logo: IconHTML, url: 'https://storybook.js.org/' },
  { label: 'Git', logo: LogoGit, url: 'https://git-scm.com/' },
  { label: 'AWS', logo: IconAWS, url: 'https://nestjs.com/' },
  { label: 'Firebase', logo: IconFirebase, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { label: 'NoSQL', logo: IconNoSQL, url: 'https://www.typescriptlang.org/' },
  { label: 'Oracle', logo: IconOracle, url: 'https://react.dev/' },
  { label: 'PyTorch', logo: IconPyTorch, url: 'https://nextjs.org/' },
  { label: 'TensorFlow', logo: IconTensorFlow, url: 'https://nodejs.org/en' },
  { label: 'NetworkX', logo: IconNetX, url: 'https://socket.io/' },
  { label: 'Apache Spark', logo: IconSpark, url: 'https://expressjs.com/' },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    company: 'Uhoo!',
    logo: LogoUhoo,
    logoAlt: 'Upwork logo',
    position: 'Full Stack Software Developer',
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 7),
    summary: [
      'Developed a map-based social media app serving as a review engine, using Swift for frontend and backend coding',
      'Integrated location matching SDK to enhance user experience and engagement and utilized Google and Foursquare APIs',
      'Accelerated development lifecycle from 75% to completion to successful beta release, setting stage for public launch and user acquisition',
      'Teamed with design cohort using Figma to contribute to app\'s design and user interface',
      'Resolved technical challenges, crafted innovative solutions. Conducted code reviews, ensuring code quality and adherence to best practices',
    ],
  },
  {
    company: 'Lavner Education',
    logo: LogoLavner,
    logoAlt: 'Greenapex logo',
    position: 'Software Engineer Intern',
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 7),
    summary: [
      'Engineered and optimized the deployment of 50+ computing systems, streamlining ops and achieving a 25% reduction in technical issues',
      'Performed comprehensive software debugging and enhancements, improving application performance and user interface responsiveness',
      'Revamped curriculum and instituted a version control protocol for educational software resulting in 50% surge in productivity',
    ],
  },
  {
    company: ' CodeLM',
    logo: LogoLM,
    logoAlt: 'Dotnpixel logo',
    position: 'Programmer',
    startDate: new Date(2017, 8),
    endDate: new Date(2020, 4),
    summary: [
      'Designed and provided solutions to programming problems for a coding competition in Java and Python',
      'Organized and planned the logistics of the competition (i.e. grouping, timing, presentation, etc.)',
      'Synchronized code and design with 75+ programmers to create this event',
      'Oversaw competition, provided answers, assisted with debugging/troubleshooting',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'PassR',
    description:
      'A computer vision model that takes broadcasted soccer games and generates passing networks for each team, providing insights into team strategies and player performance.',
    url: 'https://www.wingie.com',
    previewImage: ProjectWingie,
    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'Instalite',
    description:
      'A social media platform that allows ',
    url: 'https://fiskil.com.au',
    previewImage: ProjectFiskil,
    technologies: [
      'React',
      'Next.js',
      'Tailwindcss',
      'Javascript',
      'SQL',
      'MySQL',
      'Apache Kafka',
      'Apache Spark',
      'Amazon EC2',
      'S3',
      'ChromaDB',
      'Amazon RDS',
      'CSS',
    ],
  },
  {
    name: 'Review Roam',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
  {
    name: 'ReVision',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
  {
    name: 'AI Snake',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
  {
    name: 'PennOS',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
  {
    name: 'Chess',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
  {
    name: 'Maze and Pathfinding Visualizer',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
