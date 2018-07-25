import React, { Component } from 'react';
import MyVideo from './swimming.mp4';
import './VideoCss.css';
import CustomNavBar from '../components/CustomNavBar'

export default  class Video  extends Component {
    state = {  }
    render() { 
       return ( 
             <div className =  "container">
             <video  className="video "  autoPlay loop>
             
                <source src ={MyVideo}/>
              <CustomNavBar/>
                
             </video>
             <h1 className="test">This is another test</h1>
             </div>
         );
    }
}
 
