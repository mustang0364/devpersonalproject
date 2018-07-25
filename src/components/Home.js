import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './Home.css';



export default class Home extends Component {
  






  render() {
    return (
     
      <Grid>
       
    
        <Jumbotron>

          <h2>Y.O.L.O</h2>
          <p>"We have stopped for a moment to encounter each other, to meet, to love, to share. This is a precious moment. It is a little parenthesis in eternity."</p>
          <Link to="/about">
            <Button bsStyle="primary">Lives More</Button>
          </Link>
        </Jumbotron>
      
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="media/van.jpg" circle className="profile-pic"/>
            <h3>Travel</h3>
            <p>Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in you sail. Explore. Dream. Discover.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="media/oceanPool.jpg" circle className="profile-pic"/>
            <h3>Discover</h3>
            <p>Tourists don't know where they've been, travellers don't know where they're going.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="media/club.jpg" circle className="profile-pic"/>
            <h3>Live</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          
        </Row>
        
      </Grid>
    )
  }
}



