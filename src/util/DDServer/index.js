import * as dd from 'dingtalk-jsapi'
import axios from 'axios'
import $ from 'jquery'

export default class DDServer {
  constructor() {}
  static agentId = '';
  static corpId = '';
  static init = () => {
    var _cfg = DDServer.getConfig();
    DDServer.agentId = _cfg.appId;
    DDServer.corpId = _cfg.corpId;
  }
  static getVersion = () => {
    return dd.version;
  }
  static config = (jsapi = []) => {
    var _cfg = DDServer.getConfig();
    dd.config({
      agentId: DDServer.agentId,
      corpId: DDServer.corpId,
      timeStamp: _cfg.timeStamp,
      nonceStr: _cfg.nonce,
      signature: _cfg.signature,
      jsApiList: [
        'runtime.info',
        'runtime.permission.requestAuthCode',
        'biz.contact.choose',
        'device.notification.confirm',
        'device.notification.alert',
        'device.notification.prompt',
        'biz.ding.post',
        'biz.util.openLink',
        'biz.contact.complexPicker',
        'device.base.getPhoneInfo',
        'device.accelerometer.watchShake',
        'biz.util.open',
        ...jsapi
      ]
    });
    dd.error(function(err) {
      alert("dderr" + JSON.stringify(err));
    });
  }
  static getToken = () => {
    var _token;
    $.ajax({
      url: 'http://shlanxiao.imwork.net:8707/api/Ding/GetToken',
      type: 'get',
      async: false,
      success: function(data) {
        _token = data;
      },
      error: function(err) {
        console.log(err);
      }
    });
    return _token;
  }
  static getConfig = () => {
    var durl = window.location.href;
    var _cfg;
    $.ajax({
      url: 'http://shlanxiao.imwork.net:8707/api/Ding/GetJsApiConfig?url=' + durl,
      type: 'get',
      async: false,
      dataType: 'json',
      success: function(data) {
        _cfg = data;
      },
      error: function(err) {
        console.log(err);
      }
    });
    return _cfg;
  }
  static log = (str) => {
    $.ajax({
      url: 'http://shlanxiao.imwork.net:8707/api/Ding/log',
      type: 'post',
      async: true,
      data: {
        "content": str
      },
      success: function(data) {
        return true;
      },
      error: function(err) {
        return false;
      }
    });
  }
  static logAxios = (str) => {
    axios.post('http://shlanxiao.imwork.net:8707/api/Ding/log', {
      "content": str
    }).then(function(response) {
      alert('回调成功');
      console.log(response);
      DDServer.log(str);
    }).catch(function(error) {
      alert('回调失败');
      console.log(error);
      DDServer.log(str);
    });
  }
  static setAuth = (callback) => {
    dd.ready(function() {
      dd.runtime.permission.requestAuthCode({
        corpId: DDServer.corpId,
        // corpId: 'dingbf8b69817bb853f435c2f4657eb6378f',
        onSuccess: function(result) {
          $.ajax({
            url: 'http://shlanxiao.imwork.net:8707/api/Ding/GetUserInfo?code=' + result.code,
            type: 'get',
            async: false,
            dataType: 'json',
            success: function(data) {
              sessionStorage.setItem('userid', data.userid);
              if (callback instanceof Function) {
                callback();
              }
            },
            error: function(err) {
              console.log(err);
              DDServer.log(JSON.stringify(err));
            }
          });
        },
        onFail: function(err) {
          alert("ouatherr" + JSON.stringify(err));
          console.log(err);
        }
      });
    });
  }
  static getUserInfo = (userid) => {
    if (!userid) {
      userid = sessionStorage.getItem('userid');
    }
    var _info = null;
    $.ajax({
      url: 'http://shlanxiao.imwork.net:8707/api/user/getinfo?userid=' + userid,
      type: 'get',
      async: false,
      dataType: 'json',
      success: function(data) {
        //alert(JSON.stringify(data));
        _info = data;
      },
      error: function(err) {
        alert('登录失败');
        console.log(err);
        DDServer.log(JSON.stringify(err));
      }
    });
    return _info;
  }
  static getdd = () => {
    return dd;
  }
}