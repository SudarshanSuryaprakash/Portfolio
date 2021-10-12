import {FunctionComponent} from 'react'
import {Category} from '../Data/types'

export const NavItem: FunctionComponent<{
	value: Category | 'all'
	handlerFilterCategory: Function
	active: string
}> = ({value, handlerFilterCategory, active}) => {
	let className =
		'capitalize cursor-pointer hover:text-black dark:hover:text-white'
	if (active === value) className += ' dark:text-white text-black'

	return (
		<li className={className} onClick={() => handlerFilterCategory(value)}>
			{value}
		</li>
	)
}

const ProjectsNavbar: FunctionComponent<{
	handlerFilterCategory: Function
	active: string
}> = (props) => {
	return (
		<div className="flex px-3 py-2 space-x-3 overflow-x-auto text-gray-500 list-none">
			<NavItem value="all" {...props} />
			<NavItem value="react" {...props} />
			<NavItem value="full stack" {...props} />
			<NavItem value="javascript" {...props} />
			<NavItem value="next" {...props} />
			<NavItem value="mongo" {...props} />
			<NavItem value="node" {...props} />
		</div>
	)
}

export default ProjectsNavbar
