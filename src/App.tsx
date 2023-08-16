import React from 'react';
import logo from './logo.svg';
import './App.css';
import Classe from './components/classe/classe';

function App() {
  return (
    <>
      <h1>Escolha sua classe</h1>
      <div className="classes-wrapper">
        <Classe gameClass="Bruiser"/>
        <Classe gameClass="Assassin"/>
        <Classe gameClass="Mage"/>
        <Classe gameClass="Marksmen"/>
        <Classe gameClass="Support"/>
      </div>
    </>
  );
}

export default App;
