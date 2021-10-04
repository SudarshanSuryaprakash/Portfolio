import { IconType } from 'react-icons';
import { RiComputerLine } from 'react-icons/ri';
import { FaDatabase } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { GiFamilyTree } from 'react-icons/gi';
import { ISkill } from './types';

export const skills: ISkill[] = [
  {
    title: 'Front End Development',
    description:
      'Stunning UI, Impeccable consumption of API and an insatiable thirst for more',
    tech: ['Next.js', 'React.js', 'Gatsby.js', 'tailwind css', 'Sass'],
    Icon: RiComputerLine,
  },
  {
    title: 'Back End Development',
    description: "Databases? Rest API? I've got you covered!",
    tech: ['Node.js', 'Express.js', 'GraphQL', 'NoSQL', 'SQL'],
    Icon: FaDatabase,
  },
  {
    title: 'Programming Languages',
    description:
      "Programming languages can be learnt easily, it's the concepts that matter! Regardless, ",
    tech: ['Typescript', 'Go', 'Javascript', 'Python', 'Java'],
    Icon: SiTypescript,
  },
  {
    title: 'Concepts',
    description: 'Realized that I might as well list these too',
    tech: [
      'Data Structures',
      'Algorithms',
      'Design Patterns',
      'Database Management',
      'Object Oriented Programming',
    ],
    Icon: GiFamilyTree,
  },
];
