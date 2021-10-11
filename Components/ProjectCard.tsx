import React, { FunctionComponent } from 'react';
import { IProject } from '../Data/types';

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
    title,
  },
}) => {
  return <div>Project card</div>;
};

export default ProjectCard;
