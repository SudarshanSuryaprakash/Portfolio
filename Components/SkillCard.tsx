import { FunctionComponent } from 'react';
import { ISkill } from '../SkillsData/types';
const SkillCard: FunctionComponent<{ skill: ISkill }> = ({
  skill: { tech, description, title, Icon },
}) => {
  return (
    <div className='flex flex-col items-center '>
      <div className='p-2 items-center flex space-x-4'>
        <Icon className='w-12 h-12 text-gray-700' />
        <div>
          <h4 className='font-bold'>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className='flex space-x-1 flex-wrap m-2'>
        {tech.map((techItem) => {
          return <p key={techItem}>{techItem} | </p>;
        })}
      </div>
    </div>
  );
};

export default SkillCard;
