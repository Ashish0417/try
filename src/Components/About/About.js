import React from 'react'
import './About.css'
import play_icon from '../../assets/play.png'
import about_image from '../../assets/main.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_image} alt='' className='about-img' onClick={()=>{
                    setPlayState(true);
                }}/>
                {/* <img src={play_icon} alt='' className='play-image' /> */}

            </div>
            <div className='about-right'>
                <h3>About Image Translation</h3>
                <h2>Black and White to Color</h2>
                <p> We utilize source images as the real data and the
                    fused image should be indistinguishable with both types of real
                    images, and hence the ground-truth fused image is not required
                    in our model. The entire network is an end-to-end model
                    without the requirement of designing fusion rules. Moreover,
                    our model can be generalized to fuse source images of different resolutions</p>
                <p> We utilize source images as the real data and the
                    fused image should be indistinguishable with both types of real
                    images, and hence the ground-truth fused image is not required
                    in our model. The entire network is an end-to-end model
                    without the requirement of designing fusion rules. Moreover,
                    our model can be generalized to fuse source images of different resolutions</p>
                <p> We utilize source images as the real data and the
                    fused image should be indistinguishable with both types of real
                    images, and hence the ground-truth fused image is not required
                    in our model. The entire network is an end-to-end model
                    without the requirement of designing fusion rules. Moreover,
                    our model can be generalized to fuse source images of different resolutions</p>
            </div>
        </div>
    )
}

export default About