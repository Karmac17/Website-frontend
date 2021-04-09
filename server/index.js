const express = require('express')
const app = express()
const port = 3000
const nunjucks=require('nunjucks');
const bodyParser = require('body-parser');
const path = require('path')
const firebase=require('firebase')
var firebaseapp = require("firebase/app");
var admin = require("firebase-admin");

var firebaseConfig = {
    apiKey: "AIzaSyDgJDjjxXgC7wn0OWjkBuR70xfcelLbmMs",
    authDomain: "karmac.firebaseapp.com",
    projectId: "karmac",
    storageBucket: "karmac.appspot.com",
    messagingSenderId: "875620689481",
    appId: "1:875620689481:web:13f58d969401e79538c198",
    measurementId: "G-4G4E48SZSS"
  };

  firebaseapp.initializeApp(firebaseConfig);



var serviceAccount = require("../karmac-firebase-adminsdk-el1vx-9c420cf9c8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log(admin.app())
app.use(express.static( path.join(__dirname, '../templates')))
app.use(express.urlencoded({ extended: true })) //bodyparser


app.set('../templates/', path.join(__dirname, '../templates'));

console.log(path.join(__dirname, '../templates'))

var env = nunjucks.configure(path.join(__dirname, '../templates'), { // set folders with templates
    autoescape: true, 
    express: app
});

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/bookAslot', (req, res) => {
    res.render('bookAslot.html')
})

app.get('/brand', (req, res) => {
    res.render('brand.html')
})

app.get('/chat', (req, res) => {
    res.render('chat.html')
})

app.get('/mycar', (req, res) => {
    res.render('mycar.html')
})

app.get('/myorders', (req, res) => {
    res.render('myorders.html')
})

app.get('/profile', (req, res) => {
    res.render('profile.html')
})

app.get('/searchDealer', (req, res) => {
    res.render('searchDealer.html')
})

app.get('/specificCar', (req, res) => {
    res.render('specificCar.html')
})

app.get('/phone', (req, res) => {
    
    res.render('phn.html')
})

app.post('/profile-signup', (req, res, next) => {
  var data = req.body
  console.log(data)
  res.render('home', { itemName: data, item: items })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function phoneNumbersend()
{
   var recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      });

      const appVerifier = recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(+919433058880, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult)
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log('error')
      console.log(error)
    });

    
    
}