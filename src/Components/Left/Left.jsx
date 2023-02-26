import React from 'react'
import './Left.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import LinearScaleRoundedIcon from '@mui/icons-material/LinearScaleRounded';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import bcgImage from "../../Assets/bcgImage.jpeg";
const Left = () => {
  return (
    <>

      <div className='leftSide'>
        <div className='add-icons'>
          <div className='topLeft'>
            <AddBoxIcon id='addBtn' />
            <LinearScaleIcon id='linear' />
            <LinearScaleRoundedIcon id='linearScale' />
          </div>
          <div className='f-addr'>
            <div className='location'><NearMeRoundedIcon id='navigateSign' />New_York,_USA</div>
            <div className='sunRise'><WbTwilightIcon id='sunRise' />  07:19</div>
          </div>
          <div className='f-date'>
            <h5>Today_25_Feb</h5>
            <div className='t-SunSet'>
              <SolarPowerIcon id='sunSet' />
              19:32
            </div>
          </div>
          <div className='temp'>
            <ArrowBackIosNewRoundedIcon id='backArrow' />
            <h1>27°</h1>
            <ArrowForwardIosRoundedIcon id='forwardArrow' />
          </div>
          <div className='sunny'>
            <WbSunnyIcon id='sunny' />
            <p>Sunny</p>
          </div>
        </div>
        <div className='bcgImage'>
          <img src={bcgImage} alt='backGroundImage' id='image1' />
        </div>
      </div>
    </>
  )
}

export default Left
