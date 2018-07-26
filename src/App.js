import React, { Component } from 'react';
import axios from 'axios';
//import Video from './components/Video';
import Home from './components/Home';
import Navbar from './components/CustomNavBar';
import News from './components/News';
import About from './components/About'
import Map from './components/Map';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';



class App extends Component {
  constructor (){
    super();
    this.state={
      user:null,
      secureDataResponse:null,
    };
    this.logout = this.logout.bind(this)
    this.fetchSecureData = this.fetchSecureData.bind(this)
 }
 componentDidMount(){
   axios.get('/api/user-data').then(response => {
     this.setState({
       user:response.data
     })
   })
 }
  
 login(){
   const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback')
   window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
 }

 logout (){
   axios.post('/api/logout').then(()=> {
     this.setState({user:null})
   })
 }
  
  getMessage(error){
    return error.response
    ? error.response.data
    ? error.response.data.message
    : JSON.stringify(error.response.data, null, 2)
      : error.message;
  }
  
  fetchSecureData() {
    axios.get('/api/secure-data').then(response => {
      this.setState({ secureDataResponse: JSON.stringify(response.data, null, 2) });
    }).catch(error => {
      this.setState({ secureDataResponse: this.getMessage(error) });
    })
  }
  

  render() {
    const { user, secureDataResponse } = this.state;
    const userData = JSON.stringify(user, null, 2);
    
    return (
      

      <div className="App">
        <div className="App-intro">
          <div className="section">
            <button onClick={this.login}>Log in</button>
            {' '}
            <button onClick={this.logout}>Log out</button>
          </div>
          
          <div className="section">
            <h2>User data:</h2>
            <div><pre>{userData || 'null'}</pre></div>
          </div>

          <div className="section">
            <button onClick={this.fetchSecureData}>Fetch secure data</button>
            <div><pre>{secureDataResponse}</pre></div>
          </div>
      
      
          <Router>
      <div>
        
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/map" component ={Map}/>
        </div>
        </Router>
        </div>
        </div>

      

    
    );
  }
}

export default App;
