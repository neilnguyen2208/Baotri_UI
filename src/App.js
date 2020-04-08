import React from 'react';
import './App.css';

import Grammar from './pages/Grammar/Grammar.js';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home.js'


function App() {
  return (
    <div className="App">
      <Grammar></Grammar>
    </div>

  );
}

export default App;
