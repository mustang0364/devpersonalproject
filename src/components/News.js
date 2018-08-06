import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import axios from  'axios';
import './News.css';

import Crypto from './Crypto';





export default class News extends Component {
  constructor() {
    super();
    this.state = {
        articles:[],
       
     
      }
}
componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=36fa97415dff4392a5613249d0217990').then(response =>{
        this.setState({
            articles:response.data.articles,
        
        })
        console.log('response from news', response.data.article)
    }).catch(error => console.log(error));


}
  
render() {
    let articles=this.state.articles.map( e => {
      return <div>{e.title}</div>

  })
    return (
      <div>
        <Image src="media/road.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Crypto/>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="media/beachViewr.jpg" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
          <div>  {articles[8]} </div>
        </Grid>

        
       
      </div>
    )
  }
}
