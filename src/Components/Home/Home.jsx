import React from 'react'
import Left from '../Left/Left'
import './Home.css'
import TitleRight from '../TitleRight/TitleRight'
import RightCenter from '../RightCenter/RightCenter'
import RightFooter from '../RightFooter/RightFooter'

const Home = () => {
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                    <div className='leftSide'>
                        <Left />
                    </div>
                    <div className='rightSide'>
                        <div className='topRight'>
                            <TitleRight/>
                        </div>
                        <div className='middileRght'>
                            <RightCenter />
                        </div>
                        <div className='bottomRight'>
                            <RightFooter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
