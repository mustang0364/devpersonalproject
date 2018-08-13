import React, { Component } from 'react';
import axios from 'axios';

import Home from './components/Home';
import Navbar from './components/CustomNavBar';
import News from './components/News';

import Map from './components/Map';
import KeepInTouch from  './components/KeepInTouch';
import Profile from './components/Profile';
import Logos from './components/Logos';
import Grid from './components/SendGrid/Grid';
import Chat from './components/Socket.io/Chat';

import CompanyM from './components/Company/CompanyM';






import SMS from './components/Twilio/SMS';



import Places from './components/Places';
// import Crypto from './components/Crypto';
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
    // const { user, secureDataResponse } = this.state;
    // const userData = JSON.stringify(user, null, 2);
    
    return (
      

      <div className="App">
        <div className="App-intro">
          <div className="section">
            <button onClick={this.login}>Log in</button>
            {' '}
            <button onClick={this.logout}>Log out</button>
           
          </div>
          
          {/* <div className="section">
            <h2>User data:</h2>
            <div><pre>{userData || 'null'}</pre></div>
          </div>

          <div className="section">
            <button onClick={this.fetchSecureData}>Fetch secure data</button>
            <div><pre>{secureDataResponse}</pre></div>
          </div> 
       */}
      
          <Router>
      <div>
      {/* <Video/> */}
 
     
        
      
      <Navbar/>
        <Route exact path="/" component={Home} />
      
        <Route path="/news" component={News} />
        <Route path="/map" component ={Map}/>
        <Route path="/keepInTouch" component ={KeepInTouch}/>
        <Route path="/places" component ={Places}/>
        <Route path="/profile" component ={Profile}/>
        <Route path="/logos" component ={Logos}/>
        <Route path="/grid" component ={Grid}/>
        <Route path="/chat" component ={Chat}/>
        <Route path="/sms" component ={SMS}/>
        
        <Route path="/companym" component ={CompanyM}/>
        {/* <Route path="/photo1" component ={Photo1}/> */}
       
        
       
    
       

       
  
        
      
    
       
      
     </div>
  
        </Router>
    
        </div>
     
        </div>
  
      

    
    );
  }
}

export default App;
