import Bar from '../Components/Bar';
import { certifications, languages, tools } from '../Data/data';
import Link from 'next/link';

const skills = () => {
  return (
    <div className='mx-2'>
      <div className='grid gap-9 md:grid-cols-2 '>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages</h5>
          <div className='my-2'>
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tech</h5>
          <div className='my-2'>
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h5 className='my-3 text-2xl font-bold'>Certifications</h5>
        <p className='font-medium text-center text-gray-600'>
          Click them to view
        </p>
        <div className='mx-2 my-2 grid md:grid-cols-2 gap-2'>
          {certifications.map((cert) => {
            return (
              <Link key={cert.url} passHref href={cert.url}>
                <div className='px-2 py-1 font-bold text-black rounded-r-full cursor-pointer bg-gradient-to-l from-black to-white'>
                  {cert.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default skills;
