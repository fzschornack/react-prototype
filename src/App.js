import React, { Component } from 'react';
import MyInfinityScrollList from './components/MyInfinityScrollList'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <MyInfinityScrollList />
        </div>
  );
  }
}

export default App;
