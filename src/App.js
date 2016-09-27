import React, { Component } from 'react';
import DatasetsScrollList from './components/DatasetsScrollList'
import LeftDrawer from './components/LeftDrawer'
import Radium , {StyleRoot} from 'radium'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var styles = {
    mainContent: {
        padding: '30px',
        '@media (min-width: 900px)': {
            paddingLeft: '280px'
        }
    }
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <LeftDrawer />
                </MuiThemeProvider>
                <StyleRoot>
                    <div style={styles.mainContent}>
                        <DatasetsScrollList />
                    </div>
                </StyleRoot>
            </div>
        );
    }
}

module.exports = Radium(App);
