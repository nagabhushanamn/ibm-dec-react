import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import PropTypes from 'proptypes';
import Box from './components/Box'
import Product from './components/Product';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    this.state = {
      message: 'some message'
    }
  }

  getChildContext() {
    return { color: "red" };
  }

  changeMessage(message) {
    this.setState({
      message: message
    });
  }

  renderMessage() {
    if (this.state.message) {
      return <Message message={this.state.message} />
    } else {
      return null;
    }
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
        <div className="container">
          <button onClick={() => { this.changeMessage('Good Morning') }} className="btn btn-primary">GM</button>
          <button onClick={() => { this.changeMessage('Good Noon') }} className="btn btn-primary">GN</button>
          <button onClick={() => { this.changeMessage('Good Evening') }} className="btn btn-primary">GE</button>
          <button onClick={() => { this.changeMessage('') }} className="btn btn-primary">Remove Message</button>
          <hr />

          {this.renderMessage()}

          <hr/>

          <Box>
            <Product />
            <Product />
          </Box>

          <Box>
            <Message />
          </Box>

        </div>

      </div>
    );
  }
}


App.childContextTypes = {
  color: PropTypes.string
};

export default App;
