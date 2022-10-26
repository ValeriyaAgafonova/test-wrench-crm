import React from 'react';
import './App.css';
import Header from '../Header/header';
import Menu from '../Menu/menu';
import Main from '../Main/main';
function App() {
  return (
    <div className="app">
      <Header/>
      <div className='wrapper'>
        <Menu/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
