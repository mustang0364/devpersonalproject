import React, { Component } from 'react';
import './miami.css'

class Miami extends Component {
    constructor() {
        super();
        
        
        
        this.state = { 
            score:false,
            likes:20
         }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.instagramLike = this.instagramLike.bind(this);
    }
    
    
    instagramLike() {
        this.state.score
        ?
        this.setState({
          score: !this.state.score, 
          likes: this.state.likes - 1
        })
        :
        this.setState({
          score: !this.state.score, 
          likes: this.state.likes + 1
        })
      }
    
    
    
    
    
    
    render() { 
        const { score, likes } = this.state
        return (
            <figure className="snip1493"  onClick={() => this.instagramLike()}>
            <div className="image"><img src="media/beach.jpg" alt="ls-sample3" /></div>
            <figcaption>
              <div className="date"><span className="day">05</span><span className="month">March</span></div>
              <h3>Sunshine state</h3>
              <p>
              “Remember that wherever your heart is, there you will find your treasure.” 
              </p>
              <footer>
                <div className="views"><i className="ion-eye" />928</div>
                <div className="love" >{this.state.score ? '❤️' :<i className="ion-heart" />}{this.state.likes}</div>
                <div className="comments"><i className="ion-chatboxes" />23</div>
              </footer>
            </figcaption>
            <a href="#" />
          </figure>
          
        
        );
    }
    increment() {
        this.setState({
          score: this.state.likes + 1,
        });
      }
    
      decrement() {
        this.setState({
          score: this.state.likes - 1,
        });
      }

}

 
export default Miami;