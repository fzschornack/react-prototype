import React from 'react';
import ReactList from 'react-list';
import SearchField from './SearchField'
import DatasetCard from './DatasetCard'
import Radium from 'radium'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var styles = {
    datasets: {
        textAlign: 'center'
    },
    reactList: {
        textAlign: 'left',
        overflow: 'auto',
        height: '100%'
    },
    card: {
        margin: '20px'
    }
};

class DatasetsScrollList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {datasets: []};
    }

    searchDatasets(datasets) {
        this.setState({datasets});
    }

    renderItem(index, key) {
        const dataset = this.state.datasets[index];
        return <div key={key} style={styles.card}>
            <MuiThemeProvider>
                <DatasetCard
                    title={dataset.title}
                    description={dataset.description}
                    processedSample={dataset.processedSample}/>
            </MuiThemeProvider>
        </div>;
    }

    render() {
        return (
            <div style={styles.datasets}>
                <SearchField searchDatasets={this.searchDatasets.bind(this)} />
                <div style={styles.reactList}>
                    <ReactList
                        itemRenderer={this.renderItem.bind(this)}
                        length={this.state.datasets.length}
                        type='simple'
                    />
                </div>
            </div>
        );
    }
}

module.exports = Radium(DatasetsScrollList);