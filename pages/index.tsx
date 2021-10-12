/* eslint-disable react/no-unescaped-entities */
import type {NextPage} from 'next'
import {skills} from '../Data/data'
import SkillCard from '../Components/SkillCard'

const Home: NextPage = () => {
	return (
		<div className="flex flex-col flex-grow px-6 pt-1 dark:text-gray-200 lg:mt-6 md:mt-6">
			<div className="flex flex-col gap-1 text-justify">
				<p className="">
					Skilled Software Engineer who loves tackling challenges in the web space.
				</p>
				<p>
					Obtained a First Class Bachelor's Degree in Computer Science and
					Engineering in 2019. Graduating with an MSc in Management in 2022 with an
					expected First Class degree.
				</p>
				<p>
					Currently doing a placement year as a Software Engineer at Elanco. Looking
					for Graduate / Mid level developer opportunities.
				</p>
			</div>
			<div
				className="flex-grow p-4 mt-5 text-white bg-gray-900"
				style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}
			>
				<h6 className="my-3 text-xl font-bold tracking-wide text-white">
					Stuff I know pretty well
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
				<div className="flex flex-col gap-1 mt-3 dark:text-white">
					<p>
						Text Editor of choice? Vim. When I use VSCode, I have my Vim key bindings
						on there!
					</p>
					<p>
						Outside of work, I play Ultimate Frisbee! I've Captained a club in India,
						and we're currently placed 3rd In the country!
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
