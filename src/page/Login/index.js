import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { Link } from 'react-router-dom'
import { List, Button, WhiteSpace, InputItem, Toast } from 'antd-mobile'
import DDServer from '@/util/DDServer'
import logo from '@/images/logo.png'

class Login extends Component {
  handleLogin = () => {
    this.props.form.validateFields({
      force: true
    }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
        //this.props.history.push('/Index');
        this.props.history.replace({
          pathname: '/Index'
        })
      } else {
        Toast.fail('登录失败', 1, null, false);
      }
    });
  }
  render() {
    let ddVersion = DDServer.getVersion();
    if (ddVersion) {
      Toast.loading('钉钉正在为你登录...', 0);
      DDServer.init();
      DDServer.setAuth(() => {
        Toast.hide();
        this.props.history.replace({
          pathname: '/Index'
        })
      });
      return null;
    } else {
      const {getFieldProps, getFieldError} = this.props.form;
      return (
        <form>
          <div style={ { textAlign: 'center', marginTop: '30px', marginBottom: '30px' } }>
            <img src={ logo } />
          </div>
          <List>
            <InputItem
                       {...getFieldProps( 'companyName', { rules: [{ required: true, message: '公司名称不能为空' }] })}
                       error={ !!getFieldError('companyName') }
                       onErrorClick={ () => {
                                        Toast.fail(getFieldError('companyName'), 1, null, false);
                                      } }
                       placeholder="请填写公司名称">
              公司名称
            </InputItem>
            <InputItem
                       {...getFieldProps( 'phone', { rules: [{ required: true, message: '手机号码不能为空' }] })}
                       type="phone"
                       error={ !!getFieldError('phone') }
                       onErrorClick={ () => {
                                        Toast.fail(getFieldError('phone'), 1, null, false);
                                      } }
                       placeholder="请填写手机号码">
              手机号码
            </InputItem>
            <InputItem
                       {...getFieldProps( 'password', { rules: [{ required: true, message: '密码不能为空' }, { max: 12, message: '密码的最大长度为12' }, { min: 6, message: '密码的最小长度为6' }]
              })}
                       type="password"
                       error={ !!getFieldError('password') }
                       onErrorClick={ () => {
                                        Toast.fail(getFieldError('password').join(','), 1);
                                      } }
                       placeholder="****"
                       clear>
              密码
            </InputItem>
          </List>
          <WhiteSpace />
          <div>
            <Link
                  to="/Forget"
                  style={ { float: "right" } }>
              忘记密码？
            </Link>
          </div>
          <div style={ { clear: "right" } }></div>
          <WhiteSpace />
          <Button
                  type="primary"
                  onClick={ this.handleLogin }>
            登录
          </Button>
          <WhiteSpace />
          <Button type="default">
            员工注册
          </Button>
          <WhiteSpace />
        </form>
      )
    }
  }
}

export default createForm()(Login);

// , { validator: this.companyNameValidator }
/*
    companyNameValidator = (rule, value, callback) => {
    if (value != '') {
      callback();
    } else {
      callback(new Error('公司名称必须填'));
    }
  }
*/