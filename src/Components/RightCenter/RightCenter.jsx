import React from 'react'
import "./RightCenter.css"
import graph from '../../Assets/graph.png'
const RightCenter = () => {
  return (
    <div className='rightCenter'>
      <div className='container'>
        <div className='headerPart'>
          <div className='leftHeader'><h4>Upcoming hours</h4></div>

          <div className='centerHeader'><p>Rain precipitation _▼</p></div>
          <div className='rightHeader'><p>next day _ ➥</p></div>
        </div>

        <div className='graph__Representation'>
          <img src={graph} alt='LineChart' />
          {/* <LineChart /> */}
        </div>
      </div>
    </div>
  )
}

export default RightCenter
