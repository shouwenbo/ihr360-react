import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '@/store'
import AppRoute from '@/route/App'

/*function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

alert(window.location.href);
alert(getQueryString('corp'));*/

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