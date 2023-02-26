import React from 'react'
import './TitleRight.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import myImg from '../../Assets/myImg.jpg'
const TitleRight = () => {
  return (
    <div className='topContent'>
      <div className='topLeftContent'><h3>Welcome back Isabella!</h3>
      <p>Check out today's weather information</p></div>
      <div className='topRightContent'>
      <MoreHorizIcon />
      <div className='myImg' style={{width: '20px', height: '20px'}}>
        <img src={myImg} alt='logo'/>
      </div>
      </div>
    </div>
  )
}

export default TitleRight
