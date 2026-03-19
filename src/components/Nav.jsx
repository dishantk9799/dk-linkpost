import React from 'react'
import linkedinIcon from "../assets/linkedin.svg";
import { FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell } from "react-icons/fa";
const Nav = ({ setToggle, toggle }) => {
  return (
    <div className='w-full h-16 px-3 md:px-5 border-b-2 border-b-zinc-600 flex justify-between items-center'>

      {/* LOGO */}
      <div className='w-10'>
        <img src={linkedinIcon} alt="linkedinIcon" />
      </div>

      {/* CENTER ICON */}
      <div className='hidden md:flex gap-10 neutral-text'>
        <div className='flex flex-col accent-text-hover items-center cursor-pointer transition duration-200'>
          <FaHome className='text-xl' />
          <span className='text-xs'>Home</span>
        </div>

        <div className='flex flex-col accent-text-hover items-center cursor-pointer transition duration-200'>
          <FaUserFriends className='text-xl' />
          <span className='text-xs'>My Network</span>
        </div>

        <div className='flex flex-col accent-text-hover  items-center cursor-pointer transition duration-200'>
          <FaBriefcase className='text-xl' />
          <span className='text-xs'>Jobs</span>
        </div>

        <div className='flex flex-col accent-text-hover  items-center cursor-pointer transition duration-200'>
          <FaCommentDots className='text-xl' />
          <span className='text-xs'>Messaging</span>
        </div>

        <div className='flex flex-col accent-text-hover items-center cursor-pointer transition duration-200'>
          <FaBell className='text-xl' />
          <span className='text-xs'>Notifications</span>
        </div>
      </div>

      {/* POST BUTTON  */}
      <button onClick={() => {
        setToggle(prev => !prev)
      }} className='px-4 py-2 w-32 accent-bg accent-bg-hover transition duration-200 rounded-3xl cursor-pointer'>
        {toggle ? "Create a post" : "Show post"}
      </button>
    </div>
  )
}

export default Nav
