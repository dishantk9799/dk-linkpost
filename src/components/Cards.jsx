import React, { useState } from 'react'
import LeftSide from '../utils/LeftSide';
import RightSide from '../utils/RightSide';
import menuIcon from '../assets/menu.svg';
import { MdEdit, MdDelete } from "react-icons/md";
const Cards = ({ setToggle, postData, setPostData, setEditPost }) => {
  const [expanded, setExpanded] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleDelete = (index) => {
    setPostData(prev => prev.filter((_, i) => i !== index));
    setOpenMenu(null);
  };

  const handleEdit = (item) => {
    setEditPost(item);
    setToggle(prev => !prev);
  };

  return (
    <div className='w-full h-[calc(100vh-4rem)] flex justify-between px-4'>

      {/* LEFTSIDE */}
      <LeftSide />

      {/* POST CARDS */}
      <div className='lg:flex-2 w-full overflow-y-auto flex flex-col gap-5 border-x-2 border-x-zinc-600 p-2'>

        {postData && postData.length > 0 ? postData.map((item, index) => (

          <div key={index} className='bg-zinc-900 w-full h-fit rounded '>

            {/* USER DETAILS */}
            <div className='w-full h-18 flex items-center justify-between p-2'>
              <div className='flex items-center gap-2'>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={item.userImg}
                    onError={(e) => {
                      e.target.src = "https://static.vecteezy.com/system/resources/thumbnails/024/183/502/small/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg";
                    }} alt="https://static.vecteezy.com/system/resources/thumbnails/024/183/502/small/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg" />
                </div>
                <div>
                  <h1 className='text-lg'>{item.name}</h1>
                  <p className='text-xs'>{item.role}</p>
                </div>
              </div>

              {/* MENU */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(prev => (prev === index ? null : index))
                  }}
                  className="h-8 w-8 rounded-full accent-bg-hover transition duration-200 accent-bg flex items-center justify-center"
                >
                  <img src={menuIcon} alt="menu" />
                </button>

                {/* DROPDOWN */}
                {openMenu === index && (
                  <div className="absolute right-0 top-10 w-32 bg-zinc-800 overflow-hidden rounded-lg shadow-lg border border-zinc-700 z-50">

                    <button
                     onClick={() => handleEdit(item)}
                      className="w-full flex gap-2 items-center text-left px-3 py-2 text-sm hover:bg-zinc-700">
                      <div><MdEdit /></div>
                      <div>Edit</div>
                    </button>

                    <button
                      onClick={() => handleDelete(index)}
                      className="w-full flex gap-2 items-center text-left px-3 py-2 text-sm hover:bg-red-500 hover:text-white">
                      <div><MdDelete /></div>
                      <div>Delete</div>
                    </button>

                  </div>
                )}
              </div>
            </div>

            {/* POST TEXT */}
            <div div className='p-2' >
              <p className={`${expanded === index ? '' : 'line-clamp-2'} wrap-break-word text-sm leading-relaxed`}>
                {item.text}
              </p>
              {
                item.text.length > 100 && (
                  <span
                    onClick={() =>
                      setExpanded(prev => (prev === index ? null : index))
                    }
                    className="accent-text cursor-pointer ml-1 hover:underline"
                  >
                    {expanded === index ? ' show less' : ' ...more'}
                  </span>
                )
              }
            </div>

            {/* POST IMAGE */}
            <div className='p-2 w-full'>
              {item.postImg ?
                <img
                  className='w-full h-auto object-cover'
                  src={item.postImg}
                  onError={(e) => {
                    e.target.src = "https://webdesh.com/wp-content/uploads/2022/05/designs.ai_.jpg";
                  }}
                  alt="img" /> : ""}
            </div>
          </div>
        )) : <h1 className='text-center text-5xl'>POST EMPTY</h1>
        }
      </div >

      {/* RIGHTSIDE */}
      < RightSide />

    </div >
  )
}

export default Cards
