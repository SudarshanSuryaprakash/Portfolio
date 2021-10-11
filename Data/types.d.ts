import { IconType } from 'react-icons';

export interface ISkill {
  title: string;
  description: string;
  Icon: IconType;
}

export interface ISkillResume {
  title: string;
  level: string;
  Icon: IconType;
}

export interface ICertifications {
  title: string;
  url: string;
}

export interface IProject {
  title: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | 'react'
  | 'full stack'
  | 'javascript'
  | 'next'
  | 'node'
  | 'mongo';
