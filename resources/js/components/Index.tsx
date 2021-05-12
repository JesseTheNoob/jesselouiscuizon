import React from 'react'
import Header from './common/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {About, Dashboard} from '../pages';
const Index = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact render={Dashboard} />
                <Route path='/about' exact render={About} />
                <Route path='*' render={() => <h1>404 NO MATCH FOUND</h1>} />
            </Switch>
        </Router>
    )
}

export default Index
