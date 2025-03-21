import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import Link from 'next/link'
import Image from 'next/image'
import {useTheme} from 'next-themes'

const Sidebar = () => {
	const {theme, setTheme} = useTheme()
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<div className="text-black">
			<Image
				src="/SudarshanOfficial.jpg"
				width="150"
				height="150"
				className="w-32 h-32 mx-auto rounded-full"
				alt="Sudarshan"
			/>
			<h3 className="flex flex-col my-4 text-3xl font-medium tracking-wider font-kaushan dark:text-white">
				<span className="text-gray-600 dark:text-gray-400">Sudarshan </span>
        <span className='truncate'>Suryaprakash</span>
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Software Engineer</p>
			<a
				className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
				href="/assets/SudarshanResume_2025.pdf"
				download="SudarshanResume2025"
			>
				<GiTie className="w-6 h-6" />
				Download Resume
			</a>
			{/* social icons */}
			<div className="flex justify-around">
				<Link passHref href="https://github.com/SudarshanSuryaprakash">
					<AiFillGithub className="w-8 h-8 text-black cursor-pointer dark:text-white" />
				</Link>
				<Link
					passHref
					href="https://www.linkedin.com/in/sudarshan-suryaprakash-b5ab1b190/"
				>
					<AiFillLinkedin className="w-8 h-8 text-blue-500 cursor-pointer" />
				</Link>
			</div>
			{/* address */}
			<div
				className="flex flex-col py-4 my-5 bg-gray-200 fle-wrap"
				style={{marginLeft: '-1rem', marginRight: '-1rem'}}
			>
				<div className="flex items-center justify-center space-x-2">
					<GoLocation />
					<span>United Kingdom</span>
				</div>
				<p className="flex-wrap my-2 truncate">sudarshansprakash@gmail.com</p>
				<p className="my-2">07392785497</p>
			</div>
			{/* Email and toggle UI buttons */}
			<button
				onClick={() => window.open('mailto:sudarshansprakash@gmail.com')}
				className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-br from-gray-100 to-gray-900"
			>
				Email me
			</button>
			<button
				onClick={toggleTheme}
				className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-br from-white to-black focus:outline-none "
			>
				Toggle Theme
			</button>
		</div>
	)
}

export default Sidebar
