import Letters from './Letters.jpg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Letters} 
        className="App-Letters" 
        alt="image" />
      </header>
    </div>
  );
}


