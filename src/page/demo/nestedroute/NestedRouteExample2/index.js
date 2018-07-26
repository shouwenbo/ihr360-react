import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import FirstPage from '@/page/demo/nestedroute/FirstPage'
import SecondPage from '@/page/demo/nestedroute/SecondPage'


export default class NestedRouteExample2 extends Component {
  render() {
    return (
      <div>
        <Link
              to={ '/nestedrouteexample2/first' }
              style={ { paddingRight: '10px' } }>
          First
        </Link>
        <Link to={ '/nestedrouteexample2/second' }>
          Second
        </Link>
        <Switch>
          <Route
                 exact
                 path="/nestedrouteexample2/first"
                 component={ FirstPage } />
          <Route
                 path="/nestedrouteexample2/second"
                 component={ SecondPage } />
        </Switch>
      </div>
    )
  }
}