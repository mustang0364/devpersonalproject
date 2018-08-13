import React, { Component } from 'react'
import axios from 'axios'


export default class News1 extends Component {
    constructor() {
        super();
        this.state = {
            articles:[],
           
         
          }
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=36fa97415dff4392a5613249d0217990').then(response =>{
            this.setState({
                articles:response.data.articles,
            
            })
            console.log('response from news', response.data.article)
        }).catch(error => console.log(error));
    
    
    }

    render() { 


        let articles=this.state.articles.map( (e,i) => {
            return <div key={i}>
            <h3>{e.title}</h3>
            <h4>{e.author}</h4>
            <p>{e.description}</p>
         
            
            </div>
      
      
        })


        return ( 
        <div>{articles[2]} </div> );
    }
}
 
