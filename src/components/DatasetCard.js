import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class DatasetCard extends React.Component {

    render() {
        return (
            <Card>
                <CardTitle title={this.props.title} subtitle="Card subtitle"/>
                <CardText>
                    {this.props.description}
                </CardText>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        );
    }

}