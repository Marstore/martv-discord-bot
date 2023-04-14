const firebase = require('firebase');
const firebaseConfig = require('./firebaseConfig.json');

const app = firebase.initializeApp(firebaseConfig);

const db = app.database();
const serverRef = db.ref('servers').child('878309207433150564'); 

module.exports = { firebase, db, serverRef };
