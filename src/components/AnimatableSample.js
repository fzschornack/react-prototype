import React from 'react';

var styles = {
    td: {
        height: '40px',
        padding: '0 24px',
        color: 'rgba(0, 0, 0, 1)',
        wordWrap: 'break-word',
        minWidth: '100px',
        maxWidth: '100px',
    },
    table: {
        minWidth: '100%',
        borderCollapse: 'collapse',
        tableLayout: 'fixed'
    },
    tdDiv: {
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    divWrapper: {
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-2px',
        width: '100%'
    }
};

export default class AnimatableSample extends React.Component {

    generateRows() {
        var rows = this.props.rows;

        return rows.map(function(row, index) {
            var cells = row.map(function(cell, index) {
                return <td key={index} style={styles.td}>
                    <div style={styles.tdDiv}>
                        {cell.datum}
                    </div>
                </td>;
            });
            return <tr key={index}>{cells}</tr>;
        });
    }

    render() {
        var rowComponents = this.generateRows();

        return (
            <div style={styles.divWrapper}>
                <table style={styles.table}>
                    <tbody>
                        {rowComponents}
                    </tbody>
                </table>
            </div>
        );
    }
}