import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="media/oceanPoolr.jpg" className="header-image" />
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
