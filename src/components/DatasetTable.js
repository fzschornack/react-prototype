import React from 'react';
import IconButton from 'material-ui/IconButton';
import {greenA400} from 'material-ui/styles/colors';

var styles = {
    td: {
        padding: '0 24px',
        color: 'rgba(0, 0, 0, 1)',
        wordWrap: 'break-word',
        minWidth: '100px',
        maxWidth: '100px',
        lineHeight: '0px',
        visibility: 'hidden'
    },
    table: {
        minWidth: '100%',
        borderCollapse: 'collapse',
        tableLayout: 'fixed',
        transform: 'translate(0px)'
    },
    tdDiv: {
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    tableWrapper: {
        position: 'relative',
        overflow: 'hidden',
        width: '90%',
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    headerTd: {
        height: '56px',
        padding: '0 24px',
        color: 'rgba(0, 0, 0, 0.5)',
        wordWrap: 'break-word',
        minWidth: '100px',
        maxWidth: '100px'
    },
    icon: {
        display: 'table-cell',
        width: '5%',
        color: greenA400
    },
    button: {
        marginTop: '4px',
        verticalAlign: 'middle'
    },
    divWrapper: {
        display: 'table',
        borderTop: 'thin solid #90A4AE',
        marginTop: '-2px',
        width: '100%',
        tableLayout: 'fixed',
        overflow: 'hidden'
    }
};

export default class DatasetTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {translate: 0};
    }

    selectColumn(header) {
        console.log('We need to get the details for ', header);
    }

    generateRows() {
        var rows = this.props.rows;

        var lineHeight = this.props.showSample ? '40px' : '0px';
        var visibility = this.props.showSample ? 'visible' : 'hidden';

        var tdStyle = Object.assign({}, styles.td, {lineHeight: lineHeight, visibility: visibility});

        return rows.map(function(row, index) {
            var cells = row.map(function(cell, index) {
                return <td key={index} style={tdStyle}>
                    <div style={styles.tdDiv}>
                        {cell.datum}
                    </div>
                </td>;
            });
            return <tr key={index}>{cells}</tr>;
        });
    }

    generateHeaders() {
        var headers = this.props.headers;

        return headers.map(function(header, index) {
            return <th onClick={this.selectColumn.bind(this, header)}
                       key={index}
                       style={styles.headerTd}>
                <div style={styles.tdDiv}>
                    {header.fieldName}
                </div>
            </th>;
        }, this);
    }

    scrollToLeft = () => {
        var translate = this.state.translate + 148;
        styles.table = Object.assign({}, styles.table, {transform: 'translate(' + translate + 'px)'});
        this.setState({translate: translate});
    }
    scrollToRight = () => {
        var translate = this.state.translate - 148;
        styles.table = Object.assign({}, styles.table, {transform: 'translate(' + translate + 'px)'});
        this.setState({translate: translate});
    }

    render() {
        var rowComponents = this.generateRows();
        var headerComponents = this.generateHeaders();

        return (
            <div style={styles.divWrapper}>
                <IconButton onTouchTap={this.scrollToLeft} iconClassName="material-icons" style={styles.button} iconStyle={styles.icon}>chevron_left</IconButton>
                <div style={styles.tableWrapper}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                {headerComponents}
                            </tr>
                        </thead>
                        <tbody>
                            {rowComponents}
                        </tbody>
                    </table>
                </div>
                <IconButton onTouchTap={this.scrollToRight}  iconClassName="material-icons" style={styles.button} iconStyle={styles.icon}>chevron_right</IconButton>
            </div>
        );
    }
}