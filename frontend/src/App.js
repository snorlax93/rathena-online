import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAccountComponent from './components/ListAccountComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className='container'>
        <ListAccountComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
