import React from 'react';
import './App.css';
import Betting from './Betting';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import firebase from 'firebase/auth';
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
          <Switch>
            {/* Define routes for your app */}
            <Route path='/' exact component={Betting} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;