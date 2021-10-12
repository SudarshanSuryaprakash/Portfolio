import {useState} from 'react'
import ProjectCard from '../Components/ProjectCard'
import ProjectsNavbar from '../Components/ProjectsNavbar'
import {projects as projectsData} from '../Data/data'
import {Category} from '../Data/types'

const Projects = () => {
	const [projects, setProjects] = useState(projectsData)
	const [active, setActive] = useState('all')

	const handlerFilterCategory = (category: Category | 'all') => {
		if (category === 'all') {
			setProjects(projectsData)
			setActive(category)
			return
		}

		const newArray = projectsData.filter((project) =>
			project.category.includes(category),
		)
		setProjects(newArray)
		setActive(category)
	}
	return (
		<div className="px-5 py-2" style={{height: '65vh'}}>
			<ProjectsNavbar
				handlerFilterCategory={handlerFilterCategory}
				active={active}
			/>
			<div className="relative grid grid-cols-12 gap-4 my-3">
				{projects.map((project) => {
					return (
						<div
							key={project.title}
							className="col-span-12 lg:col-span-4 md:col-span-6"
						>
							<ProjectCard project={project} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Projects
