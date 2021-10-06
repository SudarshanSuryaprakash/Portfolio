import { FunctionComponent } from 'react';

import { ISkillResume } from '../SkillsData/types';

const Bar: FunctionComponent<{ value: ISkillResume }> = ({
  value: { Icon, level, title },
}) => {
  return (
    <div className='my-2 text-white rounded-l-full'>
      <div
        className='flex items-center px-4 py-1 rounded-l-full bg-gradient-to-r from-black to-white'
        // style={{
        //   width: level,
        // }}
      >
        <Icon className='mr-3' /> {title}
      </div>
    </div>
  );
};
export default Bar;
