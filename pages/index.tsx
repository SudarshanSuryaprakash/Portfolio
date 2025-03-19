/* eslint-disable react/no-unescaped-entities */
import type {NextPage} from 'next'
import {skills} from '../Data/data'
import SkillCard from '../Components/SkillCard'

const Home: NextPage = () => {
	return (
		<div className="flex flex-col flex-grow px-6 pt-1 dark:text-gray-200 lg:mt-6 md:mt-6">
			<div className="flex flex-col text-justify gap-1">
				<p className="font-bold text-xl mb-2">About Me</p>
				<p>
					I am an experienced Software Engineer with a passion for technology, finance, and decentralized finance (DeFi). With a robust background in front-end and full-stack development, I thrive in delivering high-quality solutions in dynamic, fast-paced environments. My deep interest in economics and finance fuels my drive to create innovative applications, particularly in the fintech and blockchain sectors.
				</p>
				<p className="mt-2">
					Currently, I am a Software Engineer at Tesco, where I have spent the last three years specializing in front-end engineering. In this role, I design and maintain user-facing applications, ensuring optimal performance, scalability, and user satisfaction. Previously, I worked as a Full Stack Software Engineer at Elanco during my placement year, honing my skills across the development stack and contributing to impactful projects.
				</p>
				<p className="mt-2">
					I hold a First Class Bachelor’s Degree in Computer Science and Engineering (2019) and an MSc in Management from Brunel University London (2022), blending technical expertise with strategic insight.
				</p>
			</div>
			<div
				className="flex-grow p-4 mt-5 text-white bg-gray-900"
				style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}
			>
				<h6 className="my-3 text-xl font-bold tracking-wide text-white">
					Technical Expertise and Domain Knowledge
				</h6>
				<div className="grid gap-6 lg:grid-cols-2">
					{skills.map((skill) => (
						<div
							className="text-gray-700 bg-white rounded-lg dark:bg-black dark:text-gray-200 lg:col-span-1"
							key={skill.title}
						>
							<SkillCard skill={skill} />
						</div>
					))}
				</div>
				<div className="flex flex-col mt-3 gap-1 dark:text-white">
					<p>
					I am a versatile individual with a passion for exploring various fields, particularly finance and economics. My diverse interests have allowed me to develop a broad skill set and a unique perspective. In addition, I am an avid Ultimate Frisbee player, where I have honed my teamwork and leadership skills through competitive play. I have had the privilege of leading my team in professional matches and tournaments, strengthening my ability to collaborate and guide others toward success.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
