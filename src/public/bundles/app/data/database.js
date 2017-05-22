import firebase from 'firebase';

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com/',
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
