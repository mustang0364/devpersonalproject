import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import axios from  'axios';
import './News.css';
import News1 from './News1';
import News2 from './News2'






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
    let articles=this.state.articles.map( (e,i) => {
      return (
      <div key={i}>
      <h3>{e.title}</h3>
      <h4>{e.author}</h4>
      <p>{e.description}</p>
   
      




      
      </div>
      )

  })
    return (
      
<div>
      
        <Grid>
     
         <h1>News</h1>
          <Row>
              <Col xs={12} sm={8} className="main-section">
               <h1>Tech Crunch</h1>
             <div>  
             {articles[5]} 
             <br/>
            
           <h1 className="feed">BuzzFeed</h1>
           <News1/>
          <h1>Google News</h1>
          <News2/>
             
             </div>
              
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
              
           </Col>
             <Col xs={12} sm={4} className="sidebar-section">
              <Image src="media/beachViewr.jpg" />
              <Crypto/>
          </Col>
           </Row>
          
         </Grid>
      
    
       
       </div> 
    )
  }
}






