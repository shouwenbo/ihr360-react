import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '@/page/demo/andt-mobile/Home'
import Flex from '@/page/demo/andt-mobile/layout/Flex'
import Button from '@/page/demo/andt-mobile/dataEntry/Button'
import Icon from '@/page/demo/andt-mobile/dataDisplay/Icon'

export default () => (
  <Switch>
    <Route
           exact
           path="/MyMenu/Flex"
           component={ Flex } />
    <Route
           path="/MyMenu/Button"
           component={ Button } />
  </Switch>
)