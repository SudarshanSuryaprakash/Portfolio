import {FunctionComponent} from 'react'
import {ISkill} from '../Data/types'
const SkillCard: FunctionComponent<{skill: ISkill}> = ({
	skill: {description, title, Icon},
}) => {
	return (
		<div className="flex items-center p-2 space-x-4">
			<Icon className="w-12 h-12 text-gray-700 dark:text-white" />
			<div>
				<h4 className="font-bold text-gray-900 dark:text-gray-100">{title}</h4>
				<p className="dark:text-gray-300">{description}</p>
			</div>
		</div>
	)
}

export default SkillCard
