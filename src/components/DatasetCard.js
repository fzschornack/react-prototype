import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import DatasetTable from './DatasetTable'
import {greenA400} from 'material-ui/styles/colors';

var styles = {
    icon: {
      color: greenA400
    },
    cardText: {
        fontSize: '18px',
        fontWeight: 300,
        whiteSpace: 'normal',
        color: '#757575',
        lineHeight: 1.5,
        textAlign: 'justify'
    },
    titleStyle: {
        fontWeight: 300,
        whiteSpace: 'nowrap',
        color: '#212121',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
};

export default class DatasetCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showSample: false};
    }

    handleToggle = () => this.setState({showSample: !this.state.showSample});

    render() {
        return (
            <Card>
                <CardTitle
                    title={this.props.title}
                    titleStyle={styles.titleStyle} />
                <CardText style={styles.cardText}>
                    {this.props.description}
                </CardText>
                <CardActions>
                    <IconButton iconClassName="material-icons" iconStyle={styles.icon}>search</IconButton>
                    <IconButton onTouchTap={this.handleToggle} iconClassName="material-icons" iconStyle={styles.icon}>visibility</IconButton>
                    <IconButton iconClassName="material-icons" iconStyle={styles.icon}>dashboard</IconButton>
                    <IconButton iconClassName="material-icons" iconStyle={styles.icon}>add_shopping_cart</IconButton>
                </CardActions>
                <CardText>
                    <DatasetTable showSample={this.state.showSample}
                                      headers={this.props.processedSample.headers}
                                      rows={this.props.processedSample.rows} />
                </CardText>
            </Card>
        );
    }

}