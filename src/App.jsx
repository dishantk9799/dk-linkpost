import React, { useState } from 'react'
import menuIcon from "./assets/menu.svg";
import Nav from "./components/Nav";
import Cards from './components/Cards';
import Post from './components/Post';
const App = () => {
  const [toggle, setToggle] = useState(true);
  const [postData, setPostData] = useState([]);
  const [editPost, setEditPost] = useState(null);
  return (
    <>
      <div className='w-full min-h-screen primary-bg secondary-text flex flex-col justify-start items-center'>
        <Nav toggle={toggle} setToggle={setToggle} />
        {toggle ?
          <Cards
            setEditPost={setEditPost}
            setToggle={setToggle}
            postData={postData}
            setPostData={setPostData}
          /> :
          <Post
            setPostData={setPostData}
            setToggle={setToggle}
            editPost={editPost}
            setEditPost={setEditPost}
          />}
      </div>
    </>
  )
}

export default App
