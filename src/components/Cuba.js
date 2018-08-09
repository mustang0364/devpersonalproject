import React, { Component } from 'react';
import './Cuba.css'

const video = document.querySelector("video");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute("autoplay");
  video.pause();
}

class Cuba  extends Component {
  state = {  }
  render() { 
    return (<header>
      <video autoPlay playsInline muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
        <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
      </video>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 120" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="mask" x={0} y={0} width="100%" height="100%">
            <rect x={0} y={0} width="100%" height="100%" />
            <text x={90} y={100}>SPAIN</text>
          </mask>
        </defs>
        <rect x={0} y={0} width="100%" height="100%" />
      </svg>
    </header>
  );
}
};  ;
  

 
export default Cuba;