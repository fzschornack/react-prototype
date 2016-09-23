import React, { Component } from 'react';
import MyInfinityScrollList from './components/MyInfinityScrollList'
import LeftDrawer from './components/LeftDrawer'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <div className="App">
        <MuiThemeProvider>
            <LeftDrawer />
        </MuiThemeProvider>
        <MyInfinityScrollList />
        </div>
  );
  }
}

export default App;
