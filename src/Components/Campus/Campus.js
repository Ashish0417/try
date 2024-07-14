import React from 'react'
import './Campus.css'
import gallary_1 from '../../assets/ashish.jpg'
import gallary_2 from '../../assets/ashish.jpg'
import gallary_3 from '../../assets/ashish.jpg'
import gallary_4 from '../../assets/ashish.jpg'
import arrow from '../../assets/arrow.jpeg'

const Campus = () => {
    return (
        <div className='campus'>
            <div className='gallery' >
                <img src={gallary_1} alt='' />
                <img src={gallary_2} alt='' />
                <img src={gallary_3} alt='' />
                <img src={gallary_4} alt='' />
            </div>
            <button className='btn dark-btn'>See More Here<img src ={arrow}/></button>
        </div>
    )
}

export default Campus