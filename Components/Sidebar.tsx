import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div>
      <img className='w-32 h-32 mx-auto rouned-full'/>
      <h3 className='my-4 text-3xl font-medium tracking-wider'>
        <span>Sudarshan </span>
        Suryaprakash
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Software Engineer</p>
      <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' href='#' download='SudarshanResume2021'>
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div>
        <Link href='https://www.google.com'>
          <AiFillGithub className='w-8 h-8' />
        </Link>
        <Link href='#'>
          <AiFillLinkedin className='w-8 h-8' />
        </Link>
      </div>
      {/* address */}
      <div>
        <div>
          <GoLocation />
          <span>United Kingdom</span>
        </div>
        <p>sudarshansprakash@gmail.com</p>
        <p>07392785497</p>
      </div>
      {/* Email and toggle UI buttons */}
      <button>Email me</button>
      <button>Toggle Ui</button>
    </div>
  );
};

export default Sidebar;
