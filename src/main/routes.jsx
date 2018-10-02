import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import List from '../product/list'


export default props => (
    <Router history={hashHistory}>
        <Route path='/product' component={List} />
        <Redirect from='*' to='/product' />
    </Router>
)