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
