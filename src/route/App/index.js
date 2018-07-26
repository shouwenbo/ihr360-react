import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '@/page/Login'
import Forget from '@/page/Forget'
import Index from '@/page/Index'
import MyInfo from '@/page/My/MyInfo'
import Selector from '@/page/Selector'
import HandleTodo from '@/page/Todo/HandleTodo'

export default () => (
  <Switch>
    <Route
           path="/Login"
           component={ Login }></Route>
    <Route
           path="/Forget"
           component={ Forget }></Route>
    <Route
           path="/Index"
           component={ Index }></Route>
    <Route
           path="/MyInfo"
           component={ MyInfo }></Route>
    <Route
           path="/HandleTodo/:id"
           component={ HandleTodo }></Route>
    <Route
           path="/Selector"
           component={ Selector }></Route>
    <Route
           path="/"
           render={ () => {
                      return <Redirect to="/Login" />
                    } } />
  </Switch>
)