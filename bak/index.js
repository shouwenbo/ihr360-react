import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import store from './store.js'
import DDServer from '@/lib/DDServer'
import AppTabBar from '@/container/AndtMobileTest/Navigation/TabBar/MyTabBar'
import MyMenu from '@/container/AndtMobileTest/Navigation/Menu/MyMenu'
import LayoutExample from '@/container/LayoutTest'
import LayoutIndexNumberOne from '@/container/LayoutTest/LayoutIndexNumberOne'
import FirstPage from '@/container/LayoutTest/FirstPage'
import SecondPage from '@/container/LayoutTest/SecondPage'

let dd = true;

if (DDServer.getVersion()) {
  alert('是DD');
  DDServer.init()
  DDServer.config();
  DDServer.setAuth(() => {
    let dd = DDServer.getdd();
    DDServer.getUserInfo();
    dd.device.base.getPhoneInfo({
      onSuccess: function(data) {
        // alert(JSON.stringify(data));
      },
      onFail: function(err) {}
    });
    dd.device.accelerometer.watchShake({
      sensitivity: 20, //振动幅度，Number类型，加速度变化超过这个值后触发shake
      frequency: 150, //采样间隔(毫秒)，Number类型，指每隔多长时间对加速度进行一次采样，然后对比前后变化，判断是否触发shake
      callbackDelay: 3000, //触发『摇一摇』后的等待时间(毫秒)，Number类型，防止频繁调用
      onSuccess: function(result) {
        dd.biz.util.open({
          name: 'friendAdd',
          params: {},
          onSuccess: function() {},
          onFail: function(err) {}
        });
      },
      onFail: function(err) {}
    });
    ReactDOM.render(
      <Provider store={ store }>
        <Router>
          <AppTabBar />
        </Router>
      </Provider>,
      document.querySelector('#root')
    )
  });

} else {

  console.log(store.getState());
  ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route
                 exact
                 path="/"
                 component={ AppTabBar }></Route>
          <Route
                 path="/lapp"
                 render={ () => <LayoutExample>
                                  <Switch>
                                    <Route
                                           exact
                                           path="/lapp/first"
                                           component={ FirstPage } />
                                    <Route
                                           path="/lapp/second"
                                           component={ SecondPage } />
                                  </Switch>
                                </LayoutExample> }>
          </Route>
          <Route
                 path='/oneapp'
                 component={ LayoutIndexNumberOne }>
          </Route>
          <Route
                 path="/MyMenu"
                 component={ MyMenu }></Route>
        </Switch>
      </Router>
    </Provider>,
    document.querySelector('#root')
  )
}

