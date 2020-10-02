import React from 'react';
import { Switch } from 'react-router-dom';
import Projects from '../pages/Projects';
import Developers from '../pages/Developers';
import Route from './Route';    

const Routes: React.FC = () => (
    <Switch>
        <Route path="/projects" exact component={Projects} />
        <Route path="/developers" exact component={Developers} />
        {/* <Route path="*" component={Developers} /> */}
    </Switch>
);

export default Routes;
