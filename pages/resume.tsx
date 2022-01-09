/* eslint-disable react/no-unescaped-entities */

const resume = () => {
    return (
        <div className="p-4">
            {/* education and experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-900 text-white p-2">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <h5 className="my-2 text-xl font-bold text-gray-400 ">
                        MSc in Management
                    </h5>
                    <p className="text-sm">2020-2022</p>
                    <div className="my-3 font-medium flex flex-col gap-1">
                        <p>
                            Understood the basics of Business sciences. Also understood the business implications of 
                            software and the role it plays in the economy.
                        </p>
                        <p>
                            Thesis: `The Role of Influence and Persuasion in
                            Organizational Management` which received a First
                            Class
                        </p>
                    </div>
                    <h5 className="my-2 text-xl font-bold text-gray-400">
                        B.Tech, Computer Science and Engineering
                    </h5>
                    <p className="text-sm">2015-2019</p>
                    <div className="my-3 flex flex-col gap-1">
                        <p>
                            Learnt the basics of Computer Science and Engineering. Strong understanding
                            of the basics has allowed for independant research and application in areas of interest.
                        </p>
                        <p>
                            Final year Project: `Data Analytics System for
                            National Key Health Indicator Data` which received a
                            first class
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Software Engineer
                        </h5>
                        <p className="dark:text-gray-300 font-semibold">Elanco</p>
                        <p className="dark:text-gray-300 text-sm">July 2021 - Present</p>
                        <p className="my-3">
                          Work on projects with latest technologies like Nextjs and Typescript.
                          Broad area of expertise in performance engineering and automating tasks through computer programs
                        </p>
                    </div>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Marketing Executive
                        </h5>
                        <p className="dark:text-gray-300 font-semibold">
                            Sysnet Associates India Private Limited
                        </p>
                        <p className="dark:text-gray-300 text-sm">Jan 2019 - Dec 2019</p>
                        <p className="my-3">
                            Produced engaging online marketing campaigns.
                            Spearheaded the creation of blogs and social media
                            content. Managed new product and content releases.
                            Worked effectively in a heavily cross-functional,
                            fast-paced environment. Managed, mentored and
                            developed a team of 3 interns. Analyzed the
                            performance of all marketing programs to identify
                            the best opportunities for optimization.
                        </p>
                    </div>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Software Intern
                        </h5>
                        <p className="dark:text-gray-300 font-semibold">
                            Sysnet Associates India Private Limited
                        </p>
                        <p className="dark:text-gray-300 text-sm">Jun - Aug 2018</p>
                        <p className="my-3">
                          Performed requirements engineering and had exposure to business.
                          Worked in a cross functional team and contributed to the development of ERP systems
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default resume;
