import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import Head from 'next/head'

import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

function MyApp({Component, pageProps}: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Head>
				<title>Sudarshan</title>
			</Head>
			<div className="px-5 grid grid-cols-12 gap-6 lg:px-48 my-14 lg:min-h-screen lg:my-0 py-14 md:px-32">
				<div className="p-4 text-center bg-white col-span-12 dark:bg-black lg:col-span-3 rounded-2xl">
					<Sidebar />
				</div>
				<div className="overflow-y-auto bg-white col-span-12 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 lg:col-span-9 rounded-2xl dark:bg-black">
					<Navbar />
					<Component {...pageProps} />
				</div>
			</div>
		</ThemeProvider>
	)
}
export default MyApp
