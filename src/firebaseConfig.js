import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyBjQ47pnIq1578kJpen3UrL-eZqZWevYeo',
    authDomain: 'the-ama-king-app.firebaseapp.com',
    databaseURL: 'https://the-ama-king-app-default-rtdb.firebaseio.com',
    projectId: 'the-ama-king-app',
    storageBucket: 'the-ama-king-app.appspot.com',
    messagingSenderId: '179271999066',
    appId: '1:179271999066:web:4ba605b8ffb4264143c263',
    measurementId: 'G-246YG2LY3T',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;