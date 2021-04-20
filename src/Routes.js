import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

export default function Routes() {
    return (
            <div className="App">

                <Navigation />         

                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/" component={Home}></Route>

                </Switch>            
            </div>
    )
}