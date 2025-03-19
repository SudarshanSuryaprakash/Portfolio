import { RiComputerLine } from 'react-icons/ri';
import { FaBrain, FaCode, FaCoins, FaDatabase, FaEthereum, FaGoogle, FaLightbulb, FaReact, FaServer } from 'react-icons/fa';
import {
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiJava,
  SiGo,
  SiGatsby,
  SiGraphql,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiShell,
  SiRedux,
  SiJest,
  SiEthereum,
} from 'react-icons/si';
import { GiFamilyTree } from 'react-icons/gi';
import { ICertifications, IProject, ISkill, ISkillResume } from './types';


export const skills: ISkill[] = [
  {
    title: 'Front-End Engineering',
    description: 'Building responsive, user-focused web applications with React, Next.js, and TypeScript, emphasizing performance and seamless user experiences.',
    Icon: FaReact, // Import from 'react-icons/fa' if needed
  },
  {
    title: 'Back-End Development',
    description: 'Designing and implementing RESTful APIs using Node.js and Express, with experience in MongoDB and SQL for data management.',
    Icon: FaServer, // Or FaDatabase
  },
  {
    title: 'Algorithmic Problem Solving',
    description: 'Applying data structures and algorithms to create efficient, scalable solutions for complex computational challenges.',
    Icon: FaCode, // Or keep GiFamilyTree
  },
  {
    title: 'Full-Stack Integration',
    description: 'Connecting front-end and back-end systems to deliver cohesive, end-to-end web applications with a focus on reliability and functionality.',
    Icon: RiComputerLine, // Or FaCogs
  },
  {
    title: 'Blockchain Development',
    description: 'Exploring blockchain technologies and smart contracts with Ethereum and Solidity.',
    Icon: FaEthereum,
  },
  {
    title: 'Decentralized Finance (DeFi) Practitioner',
    description: 'Actively engaged in DeFi platforms, with hands-on experience in yield farming, liquidity provision, and governance token management on a variety of protocols accross blockchains.',
    Icon: FaCoins, // Import from 'react-icons/fa'
  },
  {
    title: 'Product Development and Strategy',
    description: 'Aspiring product manager with a strong foundation in software engineering, eager to leverage technical expertise and strategic thinking to drive user-centric solutions. Skilled in problem-solving, cross-functional collaboration, and agile methodologies, with a keen interest in technology and finance.',
    Icon: FaLightbulb, // Import from 'react-icons/fa'
  },
  {
    title: 'AI-Enhanced Development and Ideation',
    description: 'Leveraging AI tools to streamline coding practices, accelerate development, and enhance problem-solving. Experienced in using AI for code generation, debugging, and generating innovative solutions to complex challenges.',
    Icon: FaBrain, // Visual representation of AI and innovation
  },
];

export const languages: ISkillResume[] = [
  {
    title: 'Typescript',
    level: '80%',
    Icon: SiTypescript,
  },
  {
    title: 'Javascript',
    level: '95%',
    Icon: SiJavascript,
  },
  {
    title: 'Solidity',
    level: '95%',
    Icon: SiEthereum,
  },
  {
    title: 'Python',
    level: '70%',
    Icon: SiPython,
  },
  {
    title: 'Go',
    level: '50%',
    Icon: SiGo,
  },
  {
    title: 'Java',
    level: '50%',
    Icon: SiJava,
  },
  {
    title: 'Shell',
    level: '50%',
    Icon: SiShell,
  },
];

export const tools: ISkillResume[] = [
  {
    title: 'Next.js',
    level: '80%',
    Icon: SiNextdotjs,
  },
  {
    title: 'React.js',
    level: '95%',
    Icon: SiReact,
  },
  {
    title: 'React Native',
    level: '95%',
    Icon: SiReact,
  },
  {
    title: 'Gatsby.js',
    level: '70%',
    Icon: SiGatsby,
  },
  {
    title: 'Node.js',
    level: '80%',
    Icon: SiNodedotjs,
  },
  {
    title: 'GraphQL',
    level: '70%',
    Icon: SiGraphql,
  },
  {
    title: 'Tailwind CSS',
    level: '95%',
    Icon: SiTailwindcss,
  },
  {
    title: 'Redux',
    level: '95%',
    Icon: SiRedux,
  },
  {
    title: 'Jest & Enzyme',
    level: '95%',
    Icon: SiJest,
  },
];

export const certifications: ICertifications[] = [
  {
    title: 'Web Dev',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6002ffd7-d320-481a-844b-fdcfe023be1c.pdf',
  },
  {
    title: 'Data Structures and Algorithms',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-641e1c86-d451-4fc2-8d10-ba038a4cf376.pdf',
  },
  {
    title: 'React Native',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-48a6aa78-3cde-4be1-9d84-4a36bb474ff4.pdf',
  },
  {
    title: 'React & Redux',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-48d4ddd4-8376-4c2c-8d6e-338f6dbe3e6d.pdf',
  },
  {
    title: 'Python Automation',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-1e838133-a0f6-47a5-9cf4-74a6bd9b3b31.pdf',
  },
  {
    title: 'Sass and CSS',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-8c889a17-464e-468b-9d2c-3de4836fb8f6.pdf',
  },
  {
    title: 'Node, Express and MongoDB',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-b3364c84-686d-424b-a662-e6f592c17273.pdf',
  },
  {
    title: 'Typescript',
    url: 'https://www.udemy.com/certificate/UC-d5bc9b94-7f2a-4a31-8828-b8280cad1adc/',
  },
  {
    title: 'Golang',
    url: 'https://www.udemy.com/certificate/UC-4bd6c297-9c5a-4b49-b34d-81863cc526ef/',
  },
  {
    title: 'Cyber Security',
    url: 'https://www.udemy.com/certificate/UC-d1718108-715f-4f93-a250-e1d4212bd079/',
  },
];

export const projects: IProject[] = [
  {
    title: 'Amazon Clone',
    description:
      'This is a clone of amazon! It uses the fakestore api to populate items',
    image_path: '/images/amazon.png',
    deployed_url: 'https://sudo-amazon.vercel.app',
    category: ['next'],
    github_url: 'https://github.com/SudarshanSuryaprakash/AmazonClone',
    key_techs: ['next', 'tailwind', 'react'],
  },
  {
    title: 'Hulu Clone',
    description:
      'This is a clone of Hulu that pulls data from themoviedb.',
    image_path: '/images/hulu.png',
    deployed_url: 'https://sudohulunext.vercel.app',
    category: ['next'],
    github_url: 'https://github.com/SudarshanSuryaprakash/sudohulu',
    key_techs: ['next', 'tailwind', 'react'],
  },
  {
    title: 'A* Path Visualiser',
    description:
      'A* is a graph traversal and path search algorithm, which is often used in many fields of computer science due to its completeness, optimality, and optimal efficiency. In this Project, I find the optimal path from the top left of the screen to the bottom right - past randomly generated obstacles. React was used to create the front end and modern CSS techniques (keyframes and animations) and Sass were used to animate the tiles.',
    image_path: '/images/pathFind.png',
    deployed_url: 'https://pathfind-viz.vercel.app/',
    category: ['react'],
    github_url: 'https://github.com/SudarshanSuryaprakash/A-star-visualizer',
    key_techs: ['algorithms', 'react'],
  },
  {
    title: 'ProfConnector',
    description:
      'A Full scale Social Media Web App that allows Professors from Brunel University to have a profile and communicate with each other. Uses MongoDB, Express, React and Node. Protects routes with JSON Web Tokens. Extensive backend testing with Postman. Redux is used for state management. Redux is functionality and state management is tested with Redux Dev Tools for Chrome.',
    image_path: '/images/profConnector.png',
    deployed_url: 'https://ancient-springs-06742.herokuapp.com/',
    category: ['react', 'node', 'mongo', 'full stack'],
    github_url: 'https://github.com/SudarshanSuryaprakash/ProfConnector',
    key_techs: ['node', 'react', 'mongodb', 'redux'],
  },
  {
    title: 'E-commerce',
    description:
      'Full scale E-Commerce web App rich with features. Built with the MERN stack. Ready to be deployed - Could find a client and sell. Key features include: Search Product (SP)| SP based on category | New Arrivals | Best Sellers | Product Image | Product Information | Product in stock/Out of stock | View Product | Related Products | Full cart Functionalities | User and Admin Dashboards/Routes | Advanced SP based on Price range and Category. Offers a video demo',
    image_path: '/images/ecommerce.png',
    deployed_url: 'https://www.linkedin.com/posts/sudarshan-suryaprakash-b5ab1b190_mern-react-javascript-activity-6683104988476002304-H6O8',
    category: ['react', 'node', 'mongo', 'full stack'],
    github_url: 'https://github.com/SudarshanSuryaprakash/ecommerce',
    key_techs: ['node', 'react', 'mongodb', 'sendgrid', 'braintree', 'JWT'],
  },
  {
    title: 'COVID-19 tracker',
    description:
      'Uses an external API to obtain current data on the number of affected, dead and cured people due to the COVID-19. The app uses React, Material UI and Chart.js Corona Virus is, unfortunately, spreading through the entire world. As a developer, I decided to help by visualizing the data and spreading awareness. The data is fetched from an external API. This project/application is created using the most modern JavaScript syntax (Async/Await, arrow functions, Hooks).',
    image_path: '/images/covid.png',
    deployed_url: 'https://covid19trackersud.herokuapp.com/',
    category: ['react'],
    github_url: 'https://github.com/SudarshanSuryaprakash/ecommerce',
    key_techs: ['react'],
  },
  {
    title: 'Streamer',
    description:
      'Uses an external API to obtain current data on the number of affected, dead and cured people due to the COVID-19. The app uses React, Material UI and Chart.js Corona Virus is, unfortunately, spreading through the entire world. As a developer, I decided to help by visualizing the data and spreading awareness. The data is fetched from an external API. This project/application is created using the most modern JavaScript syntax (Async/Await, arrow functions, Hooks).',
    image_path: '/images/streamer.png',
    deployed_url: 'https://www.linkedin.com/posts/sudarshan-suryaprakash-b5ab1b190_hi-everyone-during-the-pandemic-there-activity-6724369565226213376-d27j',
    category: ['react'],
    github_url: 'https://github.com/SudarshanSuryaprakash/ASM',
    key_techs: ['react', 'redux', 'json-server', 'rtmp-node-media-server'],
  },
  {
    title: 'Timer',
    description:
      'Drawing Animations built with SVG (stroke-dasharray and stroke-dashoffset)',
    image_path: '/images/timer.png',
    deployed_url: 'https://sudarshansuryaprakash.github.io/Timer/',
    category: ['javascript'],
    github_url: 'https://github.com/SudarshanSuryaprakash/Timer',
    key_techs: ['javascript'],
  },
  {
    title: 'DOM array methods',
    description:
      'Simple use of Javascript DOM array methods - forEach(), map(), sort(), filter() and reduce()',
    image_path: '/images/dom.png',
    deployed_url: 'https://sudarshansuryaprakash.github.io/Dom-Array-Methods/',
    category: ['javascript'],
    github_url: 'https://github.com/SudarshanSuryaprakash/Dom-Array-Methods',
    key_techs: ['javascript'],
  },
  {
    title: 'Exchange Rate Calculator',
    description:
      'Fetches exchange rates from external API and calls a function to rerender data every time an input is changed.',
    image_path: '/images/erc.png',
    deployed_url: 'https://sudarshansuryaprakash.github.io/Exchange-rate-calculator/',
    category: ['javascript'],
    github_url: 'https://github.com/SudarshanSuryaprakash/Exchange-rate-calculator',
    key_techs: ['javascript'],
  },
  {
    title: 'Custom Video Player',
    description:
      'Does not use the precoded controls for the HTML5 video. Custom controls for play, pause, progress bar',
    image_path: '/images/video.png',
    deployed_url: 'https://sudarshansuryaprakash.github.io/CustomVideoPlayer/',
    category: ['javascript'],
    github_url: 'https://github.com/SudarshanSuryaprakash/CustomVideoPlayer',
    key_techs: ['javascript'],
  },
  {
    title: 'Movie Seat Booker',
    description:
      'Allows for booking seats. Uses local storage to save selected data - persistent on page refresh',
    image_path: '/images/movie.png',
    deployed_url: 'https://sudarshansuryaprakash.github.io/MovieSelector/',
    category: ['javascript'],
    github_url: 'https://github.com/SudarshanSuryaprakash/MovieSelector',
    key_techs: ['javascript', 'css'],
  },
];
