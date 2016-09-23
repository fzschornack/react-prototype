import React from 'react';
import ReactList from 'react-list';
import SearchField from './SearchField'
import DatasetCard from './DatasetCard'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class MyInfinityScrollList extends React.Component {
    state = {
        datasets: []
    };

    searchDatasets(datasets) {
        this.setState({datasets});
    }

    renderItem(index, key) {
        const dataset = this.state.datasets[index];
        return <div key={key}>
            <MuiThemeProvider>
                <DatasetCard title={dataset.title} description={dataset.description} />
            </MuiThemeProvider>
        </div>;
    }

    render() {
        return (
            <div>
                <h1>Datasets</h1>
                <SearchField searchDatasets={this.searchDatasets.bind(this)} />
                <div style={{overflow: 'auto', maxHeight: 600}}>
                    <ReactList
                        itemRenderer={this.renderItem.bind(this)}
                        length={this.state.datasets.length}
                        type='uniform'
                    />
                </div>
            </div>
        );
    }
}