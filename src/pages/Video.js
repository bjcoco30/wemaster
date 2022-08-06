import React from "react";

import video from "../assets/video-02.mp4";
const Video = () => {
    return( 
             
     <div className="mainVideo">
        <video src={video} autoPlay loop muted /> 
        <div className="content">
        <h1>Welcome</h1>
        <p>To my site</p>
        </div>
     </div>


    );
}

export default Video;