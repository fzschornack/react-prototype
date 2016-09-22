import React from "react";
import API from './API';

export default class SearchField extends React.Component {

    handleSearchDatasets(e) {
        const query = e.target.value;
        API.search(query)
            .then((datasets) => (this.props.searchDatasets(datasets)));
    }

    render() {
        return (
            <input onChange={this.handleSearchDatasets.bind(this)} />
        );
    }
}