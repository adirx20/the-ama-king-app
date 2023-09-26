import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          {/* Define routes for your app */}
          <Route path='/' exact element={<Main />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;