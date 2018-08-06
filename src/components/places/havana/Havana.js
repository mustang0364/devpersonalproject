import React, { Component } from 'react';
import './havana.css'

class Havana extends Component {
    constructor() {
        super();
        
        
        
        this.state = { 
            score:false,
            likes:200
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
            <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/ls-sample3.jpg" alt="ls-sample3" /></div>
            <figcaption>
              <div className="date"><span className="day">01</span><span className="month">Dec</span></div>
              <h3>Down with this sort of thing</h3>
              <p>
                I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
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

 
export default Havana;