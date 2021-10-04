import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavItem from './NavItem';

const Navbar = () => {
  const { pathname } = useRouter();
  const [activePage, setactivePage] = useState<string>('');
  useEffect(() => {
    if (pathname === '/') setactivePage('About');
    else if (pathname === '/resume') setactivePage('Resume');
    else if (pathname === '/projects') setactivePage('Projects');
  }, [pathname]);
  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='font-bold text-gray-700 text-xl border-b-4 border-gray-500 md:text-2xl'>
        {activePage}
      </span>
      <div className='text-gray-500 text-lg space-x-5 flex'>
        <NavItem
          activePage={activePage}
          setActivePage={setactivePage}
          page='About'
          route='/'
        />
        <NavItem
          activePage={activePage}
          setActivePage={setactivePage}
          page='Projects'
          route='/projects'
        />
        <NavItem
          activePage={activePage}
          setActivePage={setactivePage}
          page='Resume'
          route='/resume'
        />
      </div>
    </div>
  );
};

export default Navbar;