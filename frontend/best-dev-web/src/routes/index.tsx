import React from 'react';
import { Switch } from 'react-router-dom';
import Projects from '../pages/Projects';
import Developers from '../pages/Developers';
import Route from './Route';    
import Ranking from '../pages/Ranking';
import Time from '../pages/Time';
import NewDeveloper from '../pages/NewDeveloper';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/projetos" exact component={Projects} />
        <Route path="/desenvolvedores" exact component={Developers} />
        <Route path="/lancar-hora/:developerId" exact component={Time} />
        <Route path="/novo-desenvolvedor" exact component={NewDeveloper} />
        <Route path="*" component={Ranking} />
    </Switch>
);

export default Routes;
