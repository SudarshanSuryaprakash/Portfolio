import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='px-5 lg:px-48 grid grid-cols-12 gap-6 my-14 lg:h-screen lg:my-0 py-14 md:px-32'>
      <div className='p-4 text-center bg-white col-span-12 lg:col-span-3 rounded-2xl'>
        <Sidebar />
      </div>
      <div className='overflow-hidden bg-white col-span-12 lg:col-span-9 rounded-2xl'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
