import React from 'react'; 
import Dictionary from './Dictionary';
import Letters from './Letters.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={Letters} 
        className="App-Letters" 
        alt="image" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer text-center">
        This project was coded by {" "}
      <a href="https://astonishing-pixie-d099a0.netlify.app/" target="_blank" rel="noopener noreferre">
        Rocio Hernandez
      </a>{" "}
      and is{" "}
      <a href="https://github.com/rociohleija/dictionary-project"
      target="_blank"
      re="noopener noreferre"
      >
        open-source on GitHub.
      </a>
      </footer>
      </div>
    </div>
  );
}


