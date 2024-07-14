import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/arrow.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
            <hr/>
            <p>To address the above challenges, in this work, we propose
            a fusion method via dual-discriminator conditional generative adversarial network (DDcGAN). We adapt the architecture
            to dual-discriminators and the discriminators are pulling each
            other on the distribution of the generated data obtained by
            the generator, so that the fused image simultaneously keeps
            the most important feature information in infrared and visible
            images.</p>
            <Link to='/upload'className='btn'>Explore More<img src={dark_arrow}/></Link>
        </div>
    </div>
  )
}

export default Home