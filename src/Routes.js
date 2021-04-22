import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post'
import Edit from './components/Edit'

export default function Routes() {
    return (
            <div className="App">

                <Navigation />         

                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts/:id" component={Post}></Route>
                    <Route exact path="/edit/:id" component={Edit}></Route>
                </Switch>            
            </div>
    )
}
