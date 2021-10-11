import { IconType } from 'react-icons';
import { RiComputerLine } from 'react-icons/ri';
import { FaDatabase, FaGoogle } from 'react-icons/fa';
import {
  SiPython,
  SiTypescript,
  SiNextDotJs,
  SiJavascript,
  SiJava,
  SiGo,
  SiGatsby,
  SiGraphql,
  SiReact,
  SiNodeDotJs,
  SiTailwindcss,
} from 'react-icons/si';
import { GiFamilyTree } from 'react-icons/gi';
import { ICertifications, IProject, ISkill, ISkillResume } from './types';

export const skills: ISkill[] = [
  {
    title: 'Front End Development',
    description:
      'Stunning UI, Impeccable consumption of API and an insatiable thirst for more',
    Icon: RiComputerLine,
  },
  {
    title: 'Back End Development',
    description: "Databases? Rest API? I've got you covered!",
    Icon: FaDatabase,
  },
  {
    title: 'Data Structures and Algorithms',
    description:
      'Having this knowledge helps with problem solving - even in the web space (Building complex navigations for example)',
    Icon: GiFamilyTree,
  },
  {
    title: 'How to Google',
    description:
      'Believe that knowing `what` to do solves most of the problem. A Google query will provide the `How`!',
    Icon: FaGoogle,
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
];

export const tools: ISkillResume[] = [
  {
    title: 'Next.js',
    level: '80%',
    Icon: SiNextDotJs,
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
    Icon: SiNodeDotJs,
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
];

export const projects: IProject[] = [
  {
    title: 'Amazon Clone',
    description:
      'This is a clone of amazon! It uses the fakestore api to populate items',
    image_path: '',
    deployed_url: '',
    category: ['next'],
    github_url: '',
    key_techs: [],
  },
];
