/*
*  react 路由
* */

import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import My from "@/pages/My";

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
});

class BasicConfig extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {

        return (
            <Router>
                <div>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab label={<Link to="/">首页</Link>} icon={<PhoneIcon />} />
                            <Tab label={<Link to="/login">发现</Link>} icon={<FavoriteIcon />} />
                            <Tab label={<Link to="/my">我的</Link>} icon={<PersonPinIcon />} />
                        </Tabs>
                    </AppBar>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        {/* both /roster and /roster/:number begin with /roster */}
                        <Route path="/login" component={Login}/>
                        <Route path="/my" component={My}/>
                    </Switch>
                </div>
            </Router>
        )
    }
};

BasicConfig.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(BasicConfig);