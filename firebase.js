const firebase = require('firebase');
const firebaseConfig = require('./firebaseConfig.json');

const app = firebase.initializeApp(firebaseConfig);

module.exports = firebase;
