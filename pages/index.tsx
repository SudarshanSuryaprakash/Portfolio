/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { skills } from '../SkillsData/data';
import SkillCard from '../Components/SkillCard';

const Home: NextPage = () => {
  return (
    <div className='flex flex-grow lg:mt-6 md:mt-6 flex-col px-6 pt-1 '>
      <h5 className='my-3 font-medium'>
        Skilled Software Engineer who loves tackling challenges in the web
        space. Obtained a Bachelor's Degree with a First Class in Computer
        Science in 2019. Graduating with an MSc in Management in 2022 with an
        expected First Class degree. Looking for Graduate / Mid level developer
        opportunities.
      </h5>
      <div
        className='flex-grow p-4 mt-5 bg-gradient-to-br from-bg-gray-100 to-bg-gray-700 '
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 font-bold text-xl tracking-wide'>
          Stuff I know pretty well
        </h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {skills.map((skill) => (
            <div
              className='bg-gray-200 rounded-lg lg:col-span-1'
              key={skill.title}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
        <div className='my-3 text-white'>
          Most importantly, I know how to <b>google</b>, and to ask for help
          when necessary!
        </div>
        <div className='my-3 text-white'>
          Text Editor of choice? Vim. If I use VSCode, I have my vim key
          bindings on there!
        </div>
      </div>
    </div>
  );
};

export default Home;
