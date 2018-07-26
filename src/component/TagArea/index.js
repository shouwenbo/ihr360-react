import React, { Component } from 'react'
import { createForm } from 'rc-form'
//import { Form, FormItem, Input } from 'antd';
import { WhiteSpace, WingBlank, Steps, Card, Button, List, InputItem, Toast, ImagePicker, TextareaItem, Tag } from 'antd-mobile'

class Selector extends Component {
  constructor(props) {
    super(props);
    this.setState({
      value: '456'
    })
  }
  state = {
    value: '123'
  }
  btnClick = (e) => {
    const {onChange} = this.props;
    console.log(this.props);
  }
  value = () => {
    return '哈哈哈哈哈哈哈';
  }
  render() {
    const {getFieldProps} = this.props.form;
    /*...getFieldProps( "input2")*/
    return (
      <div>
        <span>什么鬼</span>
        <Button onClick={ this.btnClick }>
          试着点击一下
        </Button>
        <TextareaItem
                      {...getFieldProps( "input2")}
                      rows={ 3 }
                      onChange={ v => this.setState({
                                   value: v
                                 }) }
                      value={ this.state.value } />
      </div>
    )
  }
}

export default createForm()(Selector);

//export default createForm()(Selector);