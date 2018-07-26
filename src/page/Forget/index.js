import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { Link } from 'react-router-dom'
import { List, Button, WhiteSpace, WingBlank, InputItem } from 'antd-mobile'
import logo from '@/images/logo.png'

class Login extends Component {
  render() {
    const {getFieldProps} = this.props.form;
    return (
      <div>
        忘记密码怎么办
      </div>
    )
  }
}

export default createForm()(Login);