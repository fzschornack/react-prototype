import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class LeftDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {docked: true, open: true};
    }

    componentWillMount() {
        const mql = window.matchMedia(`(min-width: 900px)`);
        mql.addListener(this.mediaQueryChanged.bind(this));
        this.setState({mql: mql, docked: mql.matches});
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged.bind(this));
    }

    mediaQueryChanged() {
        console.log("changed");
        console.log(this.state);
        this.setState({docked: this.state.mql.matches, open: !this.state.docked});
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose() {
        if (!this.state.docked)
            this.setState({open: false});
    }

    render() {
        return (
            <div>
                {!this.state.docked &&
                <RaisedButton
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggle}
                />}
                <Drawer docked={this.state.docked}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}