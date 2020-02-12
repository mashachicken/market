import React from 'react';
import './bootstrap.min.css'
import './App.css';
import Calendar from './Calendar';
import Seasons from './Seasons';
import { Switch, Route } from 'react-router-dom';

function App() {
  const bannerStyle = {
    textAlign: 'center'
  }
  return (
    <div className="App container">
      <header className="App-header">
        <div className="banner jumbotron" style={bannerStyle}>
          <h1>MARKET</h1>
        </div>
      </header>
      <main>
        <Calendar />
        <Switch>
          <Route exact path='/' component={Seasons} />
          <Route path='/id' component={Seasons} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
