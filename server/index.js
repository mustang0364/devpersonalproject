const express = require ('express');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const massive = require ('massive');
const axios = require ('axios');
const cloudinary=require('cloudinary');
require('dotenv').config();


require ('dotenv').config();
massive(process.env.CONNECTION_STRING).then(db => app.set('db',db))

const app = express();
app.use(bodyParser.json())
app.use(session({
    secret:process.env.SESSION_SECRET,
    saveUninitialized:false,
    resave:false,
}));
app.use(express.static(`${__dirname}/../build`))

app.get('/auth/callback',(req,res)=>{
    
    const payload={
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret:process.env.AUTH0_CLIENT_SECRET,
        code : req.query.code,
        grant_type:'authorization_code',
        redirect_uri:`http://${req.headers.host}/auth/callback`
    
    };

    function tradeCodeForAccessToken(){
      console.log(payload)
        return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
    }

    
      
      
      function tradeAccessTokenForUserInfo(response) {
        console.log(response.data.access_token)
        const accessToken = response.data.access_token
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`) 
      }
      
      
     
      function storeUserInfoInDataBase(response) {
        console.log('-------- response.data',response.data)
        const auth0id = response.data.sub;
        return req.app.get('db').find_user_by_auth0_id(auth0id).then(users => {
          console.log('users', users)
          if (users.length) {
            const user = users[0];
            req.session.user = user;
            console.log(user)
            res.redirect('/');
          } else {
            const createUserData = {
              auth0_id: auth0id,
              email: response.data.email,
              profile_name: response.data.name,
              picture: response.data.picture
            }
            return req.app.get('db').create_user(createUserData).then(newUsers => {
              console.log(newUsers)
              const user = newUsers[0];
              req.session.user = user; 
              res.redirect('/');
            })
          }
        })
      }
       
      
      
      tradeCodeForAccessToken()
      .then(accessToken => tradeAccessTokenForUserInfo(accessToken))
      .then(userInfo => storeUserInfoInDataBase(userInfo))
      .catch(error => {
        console.log('------- error',error)
        res.status(500).json({message: 'Server error. See server terminal'})
      })
    });
    
    app.post('/api/logout', (req, res) => {
      req.session.destroy();
      res.send();
    });
    
    app.get('/api/user-data', (req, res) => {
      res.json({ user: req.session.user });
    });
    
    function checkLoggedIn(req, res, next) {
      if (req.session.user) {
        next();
      } else {
        res.status(403).json({ message: 'Unauthorized' });
      }
    }
    
    app.get('/api/secure-data', checkLoggedIn, (req, res) => {
      res.json({ someSecureData: 123 });
    });
    
    const SERVER_PORT = process.env.SERVER_PORT || 3040;
    app.listen(SERVER_PORT, () => {
      console.log('Server listening on port ' + SERVER_PORT);
    });

//-------------------Cloudinary-------------------------------------

    app.get('/api/upload', (req, res) => {
       const timestamp = Math.round((new Date()).getTime() / 1000);
        const api_secret  = process.env.CLOUDINARY_SECRET_API;
       const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret);
        
       const payload = {
              signature: signature,
              timestamp: timestamp
          };
              res.json(payload);
      })
      




