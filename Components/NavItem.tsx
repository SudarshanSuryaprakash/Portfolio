import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const NavItem: FunctionComponent<{
  activePage: string;
  setActivePage: Function;
  page: string;
  route: string;
}> = ({ activePage, page, route, setActivePage }) => {
  return activePage !== page ? (
    <Link href={route}>
      <a>
        <span
          className='hover:text-gray-700'
          onClick={() => setActivePage(page)}
        >
          {page}
        </span>
      </a>
    </Link>
  ) : null;
};
export default NavItem;
