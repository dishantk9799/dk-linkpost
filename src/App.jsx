import React, { useState } from 'react'
import Nav from "./components/Nav";
import Cards from './components/Cards';
import Post from './components/Post';
const App = () => {
  const [toggle, setToggle] = useState(true);
  const [postData, setPostData] = useState([
  {
    name: "John",
    role: "Frontend Developer",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Day 18/21 — Let Them Judge You\n\nPeople will judge you no matter what you do.\nSo focus on your growth and keep moving forward 🚀",
    postImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    name: "Rio",
    role: "Backend Developer",
    userImg: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Consistency beats motivation.\nSmall efforts every day lead to big results 💯",
    postImg: ""
  },
  {
    name: "George",
    role: "UI/UX Designer",
    userImg: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Design is not just what it looks like.\nDesign is how it works ✨",
    postImg: "https://images.unsplash.com/photo-1559027615-cd4628902d4a"
  }
]);
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
