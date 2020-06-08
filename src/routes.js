import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Profile from './components/Profile'
import Login from './components/Login'

export default (
    <Switch>
        <Route exact path = '/' component={Login} />
        <Route path = '/profile' component={Profile} />
        <Route />
    </Switch>
)