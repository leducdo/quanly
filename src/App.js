import React from 'react';
import './App.css';
import MenuBar from './components/menu-bar/menu-bar';
import TuyenDung from './page/tuyen-dung/tuyen-dung';
import MainRouter from './config/router';
import FooterPage from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MenuBar></MenuBar>
          <Header></Header>
          <MainRouter></MainRouter>
          <FooterPage></FooterPage>
          
      </header>
    </div>
  );
}

export default App;
