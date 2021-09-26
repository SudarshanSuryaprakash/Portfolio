import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Sidebar from '../Components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='px-5 lg:px-48 grid grid-cols-12 gap-6 my-14'>
      <div className='p-4 text-center bg-white col-span-12 lg:col-span-3 rounded-2xl'>
        <Sidebar />
      </div>
      <div className='bg-white col-span-12 lg:col-span-9 rounded-2xl'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export default MyApp
