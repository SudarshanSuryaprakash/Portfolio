import { FunctionComponent } from 'react';
import { ISkill } from '../SkillsData/types';
const SkillCard: FunctionComponent<{ skill: ISkill }> = ({
  skill: { description, title, Icon },
}) => {
  return (
    <div className='p-2 items-center flex space-x-4'>
      <Icon className='w-12 h-12 text-gray-700' />
      <div>
        <h4 className='font-bold text-gray-900'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
