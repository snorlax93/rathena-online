import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListAccountComponent from './components/ListAccountComponent';
import CreateAccountComponent from './components/CreateAccountComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/"><ListAccountComponent /></Route>
            <Route exact path="/accounts"><ListAccountComponent /></Route>
            <Route exact path="/accounts/new/"><CreateAccountComponent /></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
