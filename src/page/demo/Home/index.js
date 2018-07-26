import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'antd-mobile'
import './Home.scss';

export default class Home extends Component {
  render() {
    // const styles = require('./Home.scss');
    return (
      <div>
        <h1 className='Home'>主页</h1>
        <Button type="primary">
          Button
        </Button>
      </div>
    )
  }
}