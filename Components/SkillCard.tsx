import { FunctionComponent } from 'react';
import { ISkill } from '../Data/types';
const SkillCard: FunctionComponent<{ skill: ISkill }> = ({
  skill: { description, title, Icon },
}) => {
  return (
    <div className='p-2 items-center flex space-x-4'>
      <Icon className='w-12 h-12 text-gray-700 dark:text-white' />
      <div>
        <h4 className='font-bold dark:text-gray-100 text-gray-900'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
