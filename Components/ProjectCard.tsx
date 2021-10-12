import React, {FunctionComponent, useState} from 'react'
import {IProject} from '../Data/types'
import Image from 'next/image'
import Link from 'next/link'
import {AiFillGithub, AiFillProject} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'

const ProjectCard: FunctionComponent<{project: IProject}> = ({
	project: {
		category,
		deployed_url,
		description,
		github_url,
		image_path,
		key_techs,
		title,
	},
}) => {
	const [showDetails, setShowDetails] = useState(false)
	return (
		<div className="flex flex-col items-center justify-center text-white bg-gray-900 rounded-md ">
			<Image
				onClick={() => setShowDetails(true)}
				src={image_path}
				alt={title}
				height="150"
				width="300"
				className="cursor-pointer"
			/>
			<p className="my-2 text-center">{title}</p>
			{showDetails && (
				<div className="absolute top-0 left-0 z-10 w-full h-auto p-2 text-white bg-gray-900 grid md:grid-cols-2 gap-x-12">
					<div>
						<Image src={image_path} alt={title} width="400" height="250" />
						<div className="flex justify-center my-4 text-black space-x-3">
							<a
								className="flex items-center px-4 py-2 text-lg bg-gray-400 space-x-3 rounded-md"
								href={github_url}
							>
								<AiFillGithub className="w-8 h-8 text-black cursor-pointer" />
								<span>Github</span>
							</a>
							<a
								className="flex items-center px-4 py-2 text-lg bg-gray-400 space-x-3 rounded-md"
								href={deployed_url}
							>
								<AiFillProject className="w-8 h-8 text-black cursor-pointer" />
								<span>Project</span>
							</a>
						</div>
					</div>
					<div>
						<h2 className="mb-3 text-xl font-medium md:text-2xl">{title}</h2>
						<h3 className="mb-3 font-medium">{description}</h3>
						<div className="flex flex-wrap mt-5 text-sm tracking-wider space-x-2">
							{key_techs.map((tech) => {
								return (
									<span
										className="px-2 py-1 my-1 text-black bg-gray-200 rounded-sm"
										key={tech}
									>
										{tech}
									</span>
								)
							})}
						</div>
					</div>
					<button
						className="absolute p-1 bg-black rounded-full top-3 right-3 focus:outline-none"
						onClick={() => setShowDetails(false)}
					>
						<MdClose size={20} />
					</button>
				</div>
			)}
		</div>
	)
}

export default ProjectCard
