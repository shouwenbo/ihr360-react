import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FirstPage from '@/page/demo/nestedroute/FirstPage'
import SecondPage from '@/page/demo/nestedroute/SecondPage'


export default class NestedRouteExample1 extends Component {
  render() {
    return (
      <div>
        <Link
              to={ '/nestedrouteexample1/first' }
              style={ { paddingRight: '10px' } }>
          First
        </Link>
        <Link to={ '/nestedrouteexample1/second' }>
          second
        </Link>
        { this.props.children }
      </div>
    )
  }
}