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
        className="App-Letters mb-2" 
        alt="letters" />
        <h1 className="text-center">Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="dictionary" />
      </main>
      <footer className="App-footer text-center">
        This project was coded by {" "}
      <a 
      href="https://astonishing-pixie-d099a0.netlify.app/" 
      target="_blank" 
      rel="noopener noreferrer">
        Rocio Hernandez.
      </a>
      <br />
      {" "}
      <a href="https://www.istockphoto.com/portfolio/busracavus?mediatype=photography"
      target="_blank"
      rel="noopener noreferrer"
      >
       Logo Credit.
      </a>
      </footer>
      </div>
    </div>
  );
}


