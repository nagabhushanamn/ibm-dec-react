import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HitButton from './components/HitButton';
import TotalCountDisplay from './components/TotalCountDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    this.state = {
      totalCount: 0
    }
  }

  incCount() {
    this.setState({
      totalCount: this.state.totalCount + 1
    })
  }

  render() {
    console.log('App :: render()');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />

        <div>
          <HitButton label="Hit" onHit={this.incCount.bind(this)} />
          <hr />
          <HitButton label="Kick" onHit={this.incCount.bind(this)} />
         
        </div>

        <hr />

        <TotalCountDisplay count={this.state.totalCount} />

      </div>
    );
  }
}

export default App;
