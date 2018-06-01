import React from "react";
import {Route, Link} from "react-router-dom";
import MyItem from "./MyItem";

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/01`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/02`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/03`}>Props v. State</Link>
            </li>
        </ul>
        
        <Route path={`${match.url}/:id`} component={MyItem}/>
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

export default Topics;