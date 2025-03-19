/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/no-unescaped-entities */
const Resume = () => {
    return (
        <div className="p-4">
            {/* Brief Summary */}
            <div className="mb-6">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    Dedicated Software Engineer with over three years of experience delivering impactful solutions in front-end and full-stack development. Skilled in modern technologies, performance optimization, and cross-functional collaboration, with a passion for leveraging software to solve real-world challenges.
                </p>
            </div>

            {/* Education and Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Education Section */}
                <div className="bg-gray-900 text-white p-4 rounded-lg">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div className="mb-4">
                        <h5 className="my-2 text-xl font-bold text-gray-400">MSc in Management</h5>
                        <p className="text-sm">Brunel University London, 2020-2022</p>
                        <div className="my-3 font-medium flex flex-col gap-1">
                            <p>Gained a deep understanding of business principles and the strategic role of software in driving economic outcomes.</p>
                            <p>Thesis: "The Role of Influence and Persuasion in Organizational Management"</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="my-2 text-xl font-bold text-gray-400">B.Tech, Computer Science and Engineering</h5>
                        <p className="text-sm">2015-2019</p>
                        <div className="my-3 flex flex-col gap-1">
                            <p>Developed a strong foundation in computer science, supporting independent research and practical application across diverse domains.</p>
                            <p>Final Year Project: "Data Analytics System for National Key Health Indicator Data"</p>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div className="mb-4">
                        <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
                        <p className="dark:text-gray-300 font-semibold">Tesco</p>
                        <p className="dark:text-gray-300 text-sm">July 2022 - Present</p>
                        <p className="my-3">
                            Delivered critical features across Fulfilment, Orders, and Checkout projects, utilizing Next.js, React, GraphQL and TypeScript to enhance user experience. Improved application performance by 20% through targeted optimizations.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h5 className="my-2 text-xl font-bold">Software Engineer (Placement)</h5>
                        <p className="dark:text-gray-300 font-semibold">Elanco</p>
                        <p className="dark:text-gray-300 text-sm">July 2021 - July 2022</p>
                        <p className="my-3">
                            Built and maintained full-stack applications using React, Node.js, and MongoDB, collaborating with cross-functional teams to ensure high-quality deliverables.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h5 className="my-2 text-xl font-bold">Marketing Executive</h5>
                        <p className="dark:text-gray-300 font-semibold">Sysnet Associates India Private Limited</p>
                        <p className="dark:text-gray-300 text-sm">Jan 2019 - Dec 2019</p>
                        <p className="my-3">
                            Directed digital marketing campaigns, boosting engagement by 30%. Supervised a team of 3 interns, cultivating a collaborative and results-driven environment.
                        </p>
                    </div>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Intern</h5>
                        <p className="dark:text-gray-300 font-semibold">Sysnet Associates India Private Limited</p>
                        <p className="dark:text-gray-300 text-sm">Jun - Aug 2018</p>
                        <p className="my-3">
                            Supported ERP system development, gaining expertise in requirements engineering and contributing to cross-functional team efforts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;