import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [activePage, setactivePage] = useState('')
  return (
    <div>
      <span>{activePage}</span>
      <div>
        {activePage !== 'about' && (
          <Link href='/'>
            <a>
              <span>About</span>
            </a>
            </Link>
        )}
        {activePage !== 'about' && (
          <Link href='/projects'>
            <a>
              <span>Projects</span>
            </a>
            </Link>
        )}
        {activePage !== 'resume' && (
          <Link href='/resume'>
            <a>
              <span>Resume</span>
            </a>
            </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
