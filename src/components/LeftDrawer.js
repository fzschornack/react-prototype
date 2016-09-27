import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Radium from 'radium'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var styles = {
    drawerContainer: {
        backgroundColor: '#263238'
    },
    menuItem: {
        color: 'white',
        fontWeight: 300
    }
};

class LeftDrawer extends React.Component {

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
                <IconButton
                    onTouchTap={this.handleToggle}
                    iconClassName="material-icons">
                    menu
                </IconButton>}
                <Drawer docked={this.state.docked}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        containerStyle={styles.drawerContainer}>
                    <MenuItem onTouchTap={this.handleClose.bind(this)} style={styles.menuItem}>Filters</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)} style={styles.menuItem}>Collaborations</MenuItem>
                </Drawer>
            </div>
        );
    }
}

module.exports = Radium(LeftDrawer);