import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home.js'
import AboutUs from './pages/AboutUs/AboutUs';
import Grammar from './pages/Grammar/Grammar';
import EnglishVocabulary from './pages/EnglishVocabulary/EnglishVocabulary';
import GrammarDetail from './pages/GrammarDetail/GrammarDetail.js'
import history from './components/history.js'
import EnglishListening from './pages/EnglishListening/EnglishListening';
import Login from './pages/Login/Login';
import PageTitle from './components/PageTitle/PageTitle';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact={true}>
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/vocabulary">
            <EnglishVocabulary></EnglishVocabulary>
          </Route>
          <Route path="/grammar" exact={true}>
            <Grammar></Grammar>
          </Route>
          <Route path="/grammar/grammar_detail">
            <GrammarDetail />
          </Route>
          <Route path="/listening">
            <EnglishListening></EnglishListening>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
