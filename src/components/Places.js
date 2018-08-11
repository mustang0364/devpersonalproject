import React, { Component } from 'react';
// import Cuba from './Cuba';
// import Video from './Video';
import Havana from './places/havana/Havana';
import Miami from './places/miami/Miami';

import './Places.css'

//Have all the places in a array, check the array length before mapping over it. 
//Create a seperate component for each place 
//Have score and likes for each one.
//Gonna need a instagram like function, increment, and decrement for each one.

export default class Places extends Component {
  constructor() {
    super();

    this.state = {
      score: false,
      likes:2
    };

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
      
      <div>

{/* <Cuba/> */}
        {/* <div>{this.state.score ? '❤️' :<div><i className="ion-eye" /></div>} </div> */}



 <div>
      <figure className="snip1493"onClick={() => this.instagramLike()} >
        <div className="image"  ><img src="media/mesa.jpg" alt="ls-sample1" /></div>
        <figcaption>
        <div className="date"><span className="day">28</span><span className="month">Oct</span></div>
          <h3>The Burning Man</h3>
          <p>
            The City in the desert.
          </p>
          <footer>
          <div className="views"><i className="ion-eye"  />1,870</div>
            <div className="love" >{this.state.score ? '❤️' :<i className="ion-heart" />}{this.state.likes}</div>
            <div className="comments"><i className="ion-chatboxes" />23</div>
           <div className="comments"><i className="ion-chatboxes" />23</div>
           
           
          </footer>
        </figcaption>
        <a href="#" />
      </figure>

      <Havana/>
      <Miami/>

     
     
      
      
      
      
      {/* <Video/> */}
    </div>

  
      </div>
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

