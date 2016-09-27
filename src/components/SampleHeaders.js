import React from 'react';

var styles = {
    tableWrapper: {
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-2px',
        width: '100%'
    },
    td: {
        height: '56px',
        padding: '0 24px',
        color: 'rgba(0, 0, 0, 0.5)',
        borderTop: 'thin solid #90A4AE',
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
    }
};

export default class SampleHeaders extends React.Component {

    render() {
        return (
            <div style={styles.tableWrapper}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            {this.props.headers.map(function(result, index) {
                                return <td key={index} style={styles.td}>
                                    <div style={styles.tdDiv}> {result.fieldName} </div>
                                </td>;
                            })}
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }

}