import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';
import Photo1 from './Animations/Photo1'


export default class About extends Component {
  render() {
    return (
  
      <div>
             
        <Photo1/>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="media/person-1.jpg" className="about-profile-pic" rounded />
            <h3>y.o.l.o</h3>
            <p>YOLO PROFILE</p>
            
          </Col>
        </Grid>
      </div>
    )
  }
}
