import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="media/oceanPool.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="media/person-2.jpg" className="about-profile-pic" rounded />
            <h3>Frank The Tank</h3>
            <p>The book tells the story of an Andalusian shepherd boy who starts a journey in search of a worldly treasure at the Egyptian pyramids after having a recurring dream – a prophecy, as a Romani fortune-teller interprets it. The young shepherd’s adventure ends with him finding more riches than he ever hoped for.</p>
            
          </Col>
        </Grid>
      </div>
    )
  }
}
