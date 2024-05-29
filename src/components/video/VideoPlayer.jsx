import { useRef } from "react";
import "./videoplayer.scss";
import video from "../../assets/Glimpse of Suvidha Foundation.MP4";

export default function VideoPlayer({playState, setPlayState}) {
    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} controls autoPlay muted loop></video>
    </div>
  )
}
