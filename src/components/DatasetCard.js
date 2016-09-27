import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import SampleHeaders from './SampleHeaders'
import AnimatableSample from './AnimatableSample'
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
        this.state = {expanded: false};
    }

    handleToggle = () => this.setState({expanded: !this.state.expanded});

    render() {
        return (
            <Card expanded={this.state.expanded}>
                <CardTitle
                    title={this.props.title}
                    titleStyle={styles.titleStyle} />
                <CardText style={styles.cardText}>
                    {this.props.description}
                </CardText>
                <CardActions>
                    <IconButton iconClassName="material-icons" iconStyle={styles.icon}>search</IconButton>
                    <IconButton onTouchTap={this.handleToggle}
                                iconClassName="material-icons"
                                iconStyle={styles.icon}>
                        visibility
                    </IconButton>
                    <IconButton iconClassName="material-icons" iconStyle={styles.icon}>dashboard</IconButton>
                    <IconButton iconClassName="material-icons" iconStyle={styles.icon}>add_shopping_cart</IconButton>
                </CardActions>
                <CardText>
                    <SampleHeaders headers={this.props.processedSample.headers} />
                </CardText>
                <CardText expandable={true}>
                    <AnimatableSample rows={this.props.processedSample.rows} />
                </CardText>
            </Card>
        );
    }

}