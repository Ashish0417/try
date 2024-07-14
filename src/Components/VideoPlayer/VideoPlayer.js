import React, { useRef } from 'react'
import './VideoPlayer.css'
// import video_url from '../../assets/Full+Video_Ghoomar_Padmaavat_Deepika+Padukone+Shahid+Kapoor+Ranveer+Singh_Shreya+Ghoshal+SwaroopKhan.mp4'

const VideoPlayer = ({playState,setPlayState}) => {

    const player = useRef(null);
const closePlayer = (e)=>{
    if(e.target === player.current){
        setPlayState(false);
    }
}

  return (
    <div className={`videoplayer ${playState?'':'hide'}`} ref = {player} onClick={closePlayer}>
        // <video src={video_url} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer