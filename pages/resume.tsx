/* eslint-disable react/no-unescaped-entities */

const resume = () => {
  return (
    <div className='p-4'>
      {/* education and experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div className='bg-gray-900 text-white p-2'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold text-gray-400'>
              B.Tech, Computer Science and Engineering
            </h5>
            <div className='my-3 flex flex-col gap-1'>
              <p>
                Learnt the fundamentals of computer science and obtained a first
                class degree
              </p>
              <p>
                Final year Project: `Data Analytics System for National Key
                Health Indicator Data` which received a first class
              </p>
            </div>
            <h5 className='my-2 text-xl font-bold text-gray-400 '>
              MSc in Management
            </h5>
            <div className='my-3 font-medium flex flex-col gap-1'>
              <p>
                Learnt the basics of Business and Management. Able to now be a
                strong developer with business acumen.
              </p>
              <p>
                Thesis: `The Role of Influence and Persuasion in Organizational
                Management` which received a First Class
              </p>
            </div>
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>Software Engineer</h5>
            <p className='font-semibold'>Elanco</p>
            <p className='my-3'>
              Surprisingly working with cutting edge technology! Doing solid
              work and learning loads.
            </p>
          </div>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>
              Software Intern, Marketing Executive
            </h5>
            <p className='font-semibold'>
              Sysnet Associates India Private Limited
            </p>
            <p className='my-3'>
              Worked as a software intern during my bachelors degree and came
              back to do a marketing role full time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
