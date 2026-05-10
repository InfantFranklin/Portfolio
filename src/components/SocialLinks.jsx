import React, { memo, useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = memo(() => {
  const [resumeOpen, setResumeOpen] = useState(false)

  const links = [
    {
      id: 1,
      child: <><span>LinkedIn</span> <FaLinkedin size={26} /></>,
      href: 'https://www.linkedin.com/in/infant-franklin-996384168/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: <><span>Github</span> <FaGithub size={26} /></>,
      href: 'https://github.com/InfantFranklin',
    },
    {
      id: 3,
      child: <><span>Mail</span> <HiOutlineMail size={26} /></>,
      href: 'mailto:infantfranklin1@gmail.com',
    },
  ]

  return (
    <div className='hidden xl:flex flex-col top-[30%] left-0 fixed z-50'>
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-black via-gray-800 to-gray-500 ${style}`}
          >
            
              <a href={href}
              className='flex justify-between w-full items-center text-white'
              target='_blank'
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}

        {/* Resume with hover dropdown */}
        <li
          className='relative'
          onMouseEnter={() => setResumeOpen(true)}
          onMouseLeave={() => setResumeOpen(false)}
        >
          {/* Resume trigger */}
          <div
            className={`flex justify-between items-center w-40 h-14 px-4 duration-300 bg-gradient-to-r from-black via-gray-800 to-gray-500 cursor-pointer rounded-br-md ${
              resumeOpen ? 'ml-[-10px]' : 'ml-[-100px]'
            }`}
          >
            <span className='flex justify-between w-full items-center text-white'>
              <span>Resume</span>
              <BsFillPersonLinesFill size={26} />
            </span>
          </div>

          {/* Dropdown — appears to the right of the sidebar */}
          {resumeOpen && (
            <div className='absolute top-0 left-[150px] bg-gray-900 border border-gray-700 rounded-md overflow-hidden shadow-lg w-36'>
              
               <a href='/infant-resume-frontend.pdf'
                download
                className='flex justify-between items-center px-4 py-3 text-cyan-400 text-sm hover:bg-gray-800 hover:text-white duration-200 border-b border-gray-700'
              >
                <span>Frontend</span>
                <span>↓</span>
              </a>
              
                <a href='/infant-resume-fullstack.pdf'
                download
                className='flex justify-between items-center px-4 py-3 text-cyan-400 text-sm hover:bg-gray-800 hover:text-white duration-200'
              >
                <span>Fullstack</span>
                <span>↓</span>
              </a>
            </div>
          )}
        </li>
      </ul>
    </div>
  )
});

SocialLinks.displayName = "SocialLinks";

export default SocialLinks