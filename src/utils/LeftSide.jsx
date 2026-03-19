import React from 'react'
import leftImg from '../assets/leftHuman.svg';
const LeftSide = () => {
    return (
        <div className='hidden lg:flex lg:flex-1'>
            <img src={leftImg} alt="leftimg" />
        </div>
    )
}

export default LeftSide
