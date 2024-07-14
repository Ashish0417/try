import React, { useRef, useState } from 'react'
import upload_img from '../../assets/camera.png'
import './ColorImage.css'
import next_btn from '../../assets/right-arrow.png'
import back_btn from '../../assets/back-arrow.png'
import user_1 from '../../assets/main.png'

const ColorImage = () => {
    // const inputRef = useRef(null);
    // const [image, setImage] = useState("")
    // const handleImageClick = () => {
    //     inputRef.current.click()
    // }
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     console.log(file)
    //     setImage(file)
    // }

            // <div onClick={handleImageClick} className='input-image'>
        //     {/* <img src={upload_img} alt='' /> */}
        //     {
        //         image ? <img src={URL.createObjectURL(image)} alt='' />:
        //         <img src={upload_img} alt='' />
        //     }
        //     <input type='file' onChange={handleImageChange} ref={inputRef} />
        // </div>
        const slider = useRef();
        let tx = useRef(0);
        
        const slide_front = () => {
            if (tx.current > -50) {
                tx.current -= 25;
                slider.current.style.transform=`translateX(${tx.current}%)`;
                console.log('front',tx.current)
            }
            
    
        }
        const slide_back = () => {
            if (tx.current < 0) {
                tx.current += 25;
                slider.current.style.transform=`translateX(${tx.current}%)`;
                console.log('back',tx.current)
            }
            
        }
        
    return (
        <div className='testimonials'>
            <div className='slider' >
                <ul ref={slider} style={{}}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt ='' />
                                <div>
                                    <h3>Ashish Kalgutkar 1</h3>
                                    <span>Karwar,India</span>
                                </div>
                            </div>
                            <p>
                                In the wake of the continuous advance of computer vision
                                and sensor equipment, medical imaging plays an irreplaceable role in different clinical applications such as
                                treatment planning and surgical navigation
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default ColorImage