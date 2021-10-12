import React, {FunctionComponent, useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import NavItem from './NavItem'

const Navbar = () => {
	const {pathname} = useRouter()
	const [activePage, setactivePage] = useState<string>('')
	useEffect(() => {
		if (pathname === '/') setactivePage('About')
		else if (pathname === '/resume') setactivePage('Ed & Work')
		else if (pathname === '/projects') setactivePage('Projects')
		else if (pathname === '/skills') setactivePage('Skills & Certs')
	}, [pathname])
	return (
		<div className="flex justify-between gap-5 px-5 py-3 my-3 overflow-x-auto">
			<span className="text-xl font-bold text-gray-700 border-b-4 border-gray-500 dark:text-gray-300 md:text-2xl">
				{activePage}
			</span>
			<div className="flex space-x-5 text-lg text-gray-500 dark:text-gray-200">
				<NavItem
					activePage={activePage}
					setActivePage={setactivePage}
					page="About"
					route="/"
				/>
				<NavItem
					activePage={activePage}
					setActivePage={setactivePage}
					page="Projects"
					route="/projects"
				/>
				<NavItem
					activePage={activePage}
					setActivePage={setactivePage}
					page="Ed & Work"
					route="/resume"
				/>
				<NavItem
					activePage={activePage}
					setActivePage={setactivePage}
					page="Skills & Certs"
					route="/skills"
				/>
			</div>
		</div>
	)
}

export default Navbar
