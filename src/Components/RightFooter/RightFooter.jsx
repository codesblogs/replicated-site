import React from 'react'
import './RightFooter.css'
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
const RightFooter = () => {
  return (
    <div className='cards'>
      <div className='card_1'>
        <div className='section'>
          <h4>Humidity</h4>
          <InvertColorsIcon id='humidity' />
        </div>
        <div className='output_score'><h2>82% </h2>_bad</div>
        <div className='boxes'>
          <div className='box_1' style={{ height: '5px', width: '28px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>good</p>
          </div>
          <div className='box_2' style={{ height: '5px', width: '28px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>normal</p>
          </div>
          <div className='box_3' style={{ height: '5px', width: '12px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>bad</p>
          </div>
        </div>
      </div>
      <div className='card_2'>
        <div className='section'>
          <h4>Wind</h4>
          <AirIcon id='wind' />
        </div>
        <div className='output_score'><h2>8km/hr</h2></div>
        <div className='boxes_1'>
          <div className='box_1s' style={{ height: '5px', width: '20px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>5</p>
          </div>
          <div className='box_2s' style={{ height: '5px', width: '20px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>10</p>
          </div>
          <div className='box_3s' style={{ height: '5px', width: '20px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>15</p>
          </div>
          <div className='box_2s' style={{ height: '5px', width: '20px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>20</p>
          </div>
        </div>
      </div>
      <div className='card_3'>
        <div className='section'>
          <h4>Precipitation</h4>
          <ThunderstormIcon id='precipitation' />
        </div>
        <div className='output_score'><h2>1.4cm</h2></div>
        <div className='boxes_1'>
          <div className='box_1s' style={{ height: '5px', width: '5px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>0</p>
          </div>
          <div className='box_2s' style={{ height: '5px', width: '5px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>5</p>
          </div>
          <div className='box_3s' style={{ height: '5px', width: '5px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>10</p>
          </div>
          <div className='box_2s' style={{ height: '5px', width: '5px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>15</p>
          </div>
          <div className='box_2s' style={{ height: '5px', width: '5px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>20</p>
          </div>
          <div className='box_2s' style={{ height: '5px', width: '5px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>25</p>
          </div>
          <div className='box_2s' style={{ height: '5px', width: '5px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>30</p>
          </div>
        </div>
      </div>
      <div className='card_4'>
        <div className='section'>
          <h4>UV Index</h4>
          <WbSunnyIcon id='uvIndex' />
        </div>
        <div className='output_score'><h2>4 medium</h2></div>
        <div className='boxes__1'>
          <div className='box__2' style={{ height: '5px', width: '8px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>0</p>
          </div>
          <div className='box__3' style={{ height: '5px', width: '8px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>5</p>
          </div>
          <div className='box__4' style={{ height: '5px', width: '8px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>10</p>
          </div>
          <div className='box__5' style={{ height: '5px', width: '8px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>15</p>
          </div>
          <div className='box__6' style={{ height: '5px', width: '8px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>20</p>
          </div>
          <div className='box__7' style={{ height: '5px', width: '8px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>25</p>
          </div>
          <div className='box__8' style={{ height: '5px', width: '8px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>30</p>
          </div>
        </div>
      </div>
      <div className='card_5'>
        <div className='section'>
          <h4>feels like</h4>
          <ThermostatIcon id='thermo' />
        </div>
        <div className='output_score'><h2>30°C</h2></div>
        <div className='boxes__1'>
          <div className='box__2' style={{ height: '5px', width: '55px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>30</p>
          </div>
          <div className='box__2' style={{ height: '5px', width: '35px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>50</p>
          </div>
        </div>
      </div>
      <div className='card_6'>
        <div className='section'>
          <h4>Chances of rain</h4>
          <CloudQueueIcon id='rain' />
        </div>
        <div className='output_score'><h2>42%</h2></div>
        <div className='boxes__1s'>
          <div className='box__2s' style={{ height: '5px', width: '20px', color: 'grey', backgroundColor: '#5c9ce5' }}>
            <p>25</p>
          </div>
          <div className='box__3s' style={{ height: '5px', width: '30px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>50</p>
          </div>
          <div className='box__4s' style={{ height: '5px', width: '50px', color: 'grey', backgroundColor: '#dcdcdc' }}>
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightFooter
