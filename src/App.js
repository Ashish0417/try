import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Types from './Components/Types/Types'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
// import ColorImage from './Components/ColorImage/ColorImage'
import Upload from './Components/Upload/Upload'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const App = () => {

  const[playState,setPlayState] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element:<div><Navbar/><Home/><Title title = 'Types' subtitle = 'Types Of Dataset' /></div>
    },
    {
      path: "/upload",
      element:<div><Navbar notHome={true}/><Upload/><Title title = 'Types' subtitle = 'Types Of Dataset' /></div>
    }

  ])

  return (
    <div>
      

      <RouterProvider router={router}/>
      
      <div className='container'>
      <Types/>
      <About setPlayState={setPlayState}/>
      <Title title = 'Gallery' subtitle='Campus Photos'/>
      <Campus/>
      <Title title = 'Testimonials' subtitle='What Student says'/>
      <Testimonials/>
      <Title title= 'Contact Us' subtitle='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      {/* <VideoPlayer playState={playState} setPlayState={setPlayState}/> */}
    </div>

  )
}

export default App