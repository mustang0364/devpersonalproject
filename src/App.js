import React, { Component } from 'react';
//import Video from './components/Video';
import Home from './components/Home';
import Navbar from './components/CustomNavBar';
import News from './components/News';
import About from './components/About'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        
      
      <Router>
        <div>
    <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
