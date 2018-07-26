import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '@/store'
import AppRoute from '@/route/App'


ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <AppRoute />
    </Router>
  </Provider>,
  document.querySelector('#root')
)

/*alert(window.location.href);


let render = function() {
  ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <AppRoute />
      </Router>
    </Provider>,
    document.querySelector('#root')
  )
}

if (DDServer.getVersion()) {
  DDServer.init();
  //DDServer.config();
  DDServer.setAuth(() => {
    let dd = DDServer.getdd();
    DDServer.getUserInfo();
    render();
  });
} else {
  render();
}

*/