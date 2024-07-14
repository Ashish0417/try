import React from 'react'
import './Contact.css'
import message_icon from '../../assets/forward-message.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "98496c22-8466-4245-bbdf-bb3aa0a596b3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>
                    Send us a message<img src={message_icon} alt=''/>
                </h3>
                <p>
                    the influence can be mitigated. Third, as for
                    the input of the generator, i.e., different-resolution source
                    images, instead of upsampling the low-resolution source image
                    with two upsamping layers, we employ a deconvolution layer
                    to learn a mapping from low to high resolution. The difference
                    is that the parameters in t
                </p>
                <ul>
                    <li><img src={mail_icon} alt=''/>ashishkal@gmail.com</li>
                    <li><img src={phone_icon} alt=''/>+389283897883</li>
                    <li><img src={location_icon} alt=''/>Karnataka,Karwar,India</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your phone number' required/>
                    <label>Write your message here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact