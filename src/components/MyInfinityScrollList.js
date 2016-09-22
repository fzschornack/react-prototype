import React from 'react';
import ReactList from 'react-list';
import SearchField from './SearchField'

export default class MyInfinityScrollList extends React.Component {
    state = {
        datasets: []
    };

    searchDatasets(datasets) {
        this.setState({datasets});
    }

    renderItem(index, key) {
        return <div key={key}>{this.state.datasets[index].title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Datasets</h1>
                <SearchField searchDatasets={this.searchDatasets.bind(this)} />
                <div style={{overflow: 'auto', maxHeight: 400}}>
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