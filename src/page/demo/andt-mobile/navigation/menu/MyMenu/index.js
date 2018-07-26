import React, { Component } from 'react'
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile'
import { Switch, Route, withRouter } from 'react-router-dom'
import DDServer from '@/util/DDServer'
import MyMenuRoute from '@/route/demo/MyMenu'

const data = [
  {
    value: 'Layout',
    label: '布局',
    children: [
      {
        label: 'Flex布局',
        value: '/MyMenu/Flex'
      },
      {
        label: '两翼留白',
        value: 'WingBlank',
      }, {
        label: '上下留白',
        value: 'WhiteSpace',
      }],
  }, {
    value: 'Navigation',
    label: '导航',
    children: [
      {
        label: '与ListViews结合的标签栏',
        value: 'TabBar/TabBarExample',
      }],
  }, {
    value: 'DataEntry',
    label: '数据输入',
    children: [
      {
        label: '按钮',
        value: '/MyMenu/Button',
      }],
  },
];

/*let dd = DDServer.getdd();*/

class MyMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      initData: '',
      show: false,
    };
    console.log('控件初始化');
  }
  componentWillMount() {
    console.log('渲染之前触发');
  }
  componentDidMount() {
    console.log('第一次渲染后触发');
  }
  componentWillReceiveProps() {
    console.log('接收到新的props时触发');
  }
  shouldComponentUpdate() {
    console.log('接收到新的props或States时判断是不是需要更新');
    return true;
  }
  componentWillUpdate() {
    console.log('准备更新新的render前触发');
  }
  componentDidUpdate() {
    console.log('在组件完成更新后立即触发');
  }
  componentWillUnmount() {
    console.log('组件被移除时触发');
  }
  onChange = (value) => {
    this.props.history.push(value[value.length - 1]);
  }
  leftClick = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show,
    });
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 1);
    }
  }
  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }
  render() {
    const {initData, show} = this.state;
    const menuEl = (
    <Menu
          className="multi-foo-menu"
          data={ initData }
          value={ ['Layout', ['Flex']] }
          onChange={ this.onChange }
          height={ document.documentElement.clientHeight * 0.6 } />
    );
    const loadingEl = (
    <div style={ { position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' } }>
      <ActivityIndicator size="large" />
    </div>
    );
    return (
      <div>
        <div className={ show ? 'multi-menu-active' : '' }>
          <div>
            <NavBar
                    leftContent="Menu"
                    mode="light"
                    onLeftClick={ this.leftClick }
                    className="multi-top-nav-bar">
              Multi select menu
            </NavBar>
          </div>
          { show ? initData ? menuEl : loadingEl : null }
          { show ? <div
                        className="menu-mask"
                        onClick={ this.onMaskClick } /> : null }
        </div>
        <MyMenuRoute />
      </div>
      );
  }
}

export default withRouter(MyMenu);