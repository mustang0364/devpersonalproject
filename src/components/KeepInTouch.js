import React, { Component } from 'react';
import{Link} from 'react-router-dom';






import './KeepInTouch.css'


export default class KeepInTouch extends Component {
  state = {  }
  render() { 
    return ( 
      <div class="container">
      <div class="row">
          <div class="heading-title text-center">
              <h3 class="text-uppercase"> For more information</h3>
              <p class="p-top-30 half-txt">For more information please contact one of the team members... </p>
          </div>


                <Link to ="/sms">  
          <div class="col-md-4 col-sm-4" >
              <div class="team-member">
                  <div class="team-img">
                
                      <img src="media/oceanPool.jpg" alt="team member" class="img-responsive"/>
                   
                  </div>
                  <div class="team-hover">
                      <div class="desk">
                          <h4>Hi There !</h4>
                         
                          <p>Ready to live the experience of your life in Cuba </p>
                        
                      </div>
                  
                  </div>
              </div>
              <div class="team-title">
                  <h5>James Bond </h5>
                  <span>founder &amp; ceo</span>
              </div>
          </div>
          </Link>
     
      </div>
   
  </div>
     );
  }
}
 
 ;