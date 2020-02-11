import React from 'react';
import './App.css';
import Calendar from './Calendar';
import Seasons from './Seasons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <h1>MARKET</h1>
        </div>
      </header>
      <main>
        <Calendar />
        <Seasons />
      </main>
    </div>
  );
}

export default App;
