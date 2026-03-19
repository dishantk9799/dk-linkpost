import React from 'react'
import menuIcon from "./assets/menu.svg";
import Nav from "./components/Nav";
import Cards from './components/Cards';
const App = () => {
  return (
    <>
      <div className='w-full h-screen primary-bg secondary-text flex flex-col justify-start items-center'>
          <Nav/>
          <Cards/>
      </div>
    </>
  )
}

export default App
