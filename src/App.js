import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
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
import UserAccountManagement from "./pages/UserAccountManagement/UserAccountManagement.js"
// import Form from "./pages/UserAccountManagement/UserAccountManagement.js"
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Login></Login>
          </Route>
          <Route path="/home" exact>
            <Home></Home>
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs></AboutUs>
          </Route>
          <Route path="/vocabulary" exact>
            <EnglishVocabulary></EnglishVocabulary>
          </Route>
          <Route path="/grammar" exact>
            <Grammar></Grammar>
          </Route>
          <Route path="/grammar/grammar_detail" exact>
            <GrammarDetail />
          </Route>
          <Route path="/listening" exact>
            <EnglishListening></EnglishListening>
          </Route>
          <Route path="/user">
            <UserAccountManagement></UserAccountManagement>
          </Route>
          <Route path="/home/:id">
            <EnglishListening></EnglishListening>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
