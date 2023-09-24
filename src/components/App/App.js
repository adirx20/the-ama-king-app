import React from 'react';
import './App.css';
import Betting from '../Betting/Betting';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='header'>
          <h2>
            Sports Betting App
          </h2>
          {/* Add navigation links or components here */}
        </header>
        <main>
          <Routes>
            {/* Define routes for your app */}
            <Route path='/' exact component={Betting} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;