require('dotenv').config();
const twilio = require ('twilio');
const chance= new require ('chance')();
const cors = require('cors');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');
const express = require ('express');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const massive = require ('massive');
var socket = require ('socket.io')
const axios = require ('axios');
const cloudinary=require('cloudinary');
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 
const cC = require('./company_controller')







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
  //---------------------Twilio-----------------//is not working Channel duplicate////
   


  const AccessToken = twilio.jwt.AccessToken
  const ChatGrant = AccessToken.ChatGrant
  
  app.get('/token', function (req, res) {
    const token = new AccessToken(
  
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY,
      process.env.TWILIO_API_SECRET,
    )
  
    token.identity = chance.name()
    token.addGrant(new ChatGrant({
      serviceSid: process.env.TWILIO_CHAT_SERVICE_SID
    }))

    console.log({
      identity: token.identity,
      jwt: token.toJwt()
    })
  
    res.send({
      identity: token.identity,
      jwt: token.toJwt()
    })
  })





 // ---------------------------SMS----------------//
 //twilio requirements -- Texting API 
 const accountSid = 'AC27a982a83af613cbeb314036ce9be0d7';
 const authToken = '3eb49ed284adaa07a3c0a461719494cb'; 
 const client = new twilio(accountSid, authToken);
 
 

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
//Welcome Page for the Server 
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
  //Welcome Message
  res.send('Hello to the Twilio Server')

  //_GET Variables
  const { recipient, textmessage } = req.query;


  //Send Text
  client.messages.create({
      body: textmessage,
      to: '+15615631711',  // Text this number
      from: '+19514337031' // From a valid Twilio number
  }).then((message) => console.log(message.body));
})

//--------------------Outbound-----------//the ./ngrok need to have the same port number that your app is running not the localhost the port//
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('i want to thank STACK Overflow for this degree');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

//---------------------SendGrid---------------------//
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server: 
app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server"); 
});

app.get('/send-email', (req,res) => {
    
    //Get Variables from query string in the search bar
    const { recipient, sender, topic, text } = req.query; 

    //Sendgrid Data Requirements
    const msg = {
        to: 'abrymr@yahoo.com',  //recipient
        from: sender,
        subject: topic,
        text: text,
       
    }

    //Send Email
    sgMail.send(msg)
    .then((msg) => console.log(text));
});

//------------------Socket.io---------------------///

server = app.listen(3040, () => console.log("Running on Port🚀 3040"))


io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});

//-------------------------CRUD----------////
app.get('/api/company_names', cC.read);
app.post('/api/post_comment', cC.create);
app.delete('/api/post_comment/:id',cC.delete);
app.put('/api/post_comment/:id', cC.edit);












