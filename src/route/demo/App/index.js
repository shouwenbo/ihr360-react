import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import AppTabBar from '@/page/demo/andt-mobile/navigation/tabbar/MyTabBar'
import MyMenu from '@/page/demo/andt-mobile/navigation/menu/MyMenu'
import NestedRouteExample1 from '@/page/demo/nestedroute/NestedRouteExample1'
import NestedRouteExample2 from '@/page/demo/nestedroute/NestedRouteExample2'
import FirstPage from '@/page/demo/nestedroute/FirstPage'
import SecondPage from '@/page/demo/nestedroute/SecondPage'
import Flex from '@/page/demo/andt-mobile/layout/Flex'

export default () => (
  <Switch>
    <Route
           exact
           path="/"
           component={ AppTabBar }></Route>
    <Route
           path='/Flex'
           component={ Flex }>
    </Route>
    <Route
           path="/nestedrouteexample1"
           render={ () => <NestedRouteExample1>
                            <Switch>
                              <Route
                                     exact
                                     path="/nestedrouteexample1/first"
                                     component={ FirstPage } />
                              <Route
                                     path="/nestedrouteexample1/second"
                                     component={ SecondPage } />
                            </Switch>
                          </NestedRouteExample1> }>
    </Route>
    <Route
           path='/nestedrouteexample2'
           component={ NestedRouteExample2 }>
    </Route>
    <Route
           path="/MyMenu"
           component={ MyMenu }></Route>
  </Switch>
)