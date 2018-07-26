import React, { Component } from 'react'
import { TabBar, Button, WingBlank } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom'
import axios from 'axios'
import style from './index.scss'
import Counter from '@/page/demo/redux/Counter'
import MyMenu from '@/page/demo/andt-mobile/navigation/menu/MyMenu'
import Flex from '@/page/demo/andt-mobile/layout/Flex'
import ButtonExample from '@/page/demo/andt-mobile/dataEntry/Button'

export default class MyTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      hidden: false,
      fullScreen: true,
    };
    console.log(this.props);
  }
  toamp = () => {
    console.log(this.props);
    this.props.history.push('/MyMenu');
  }
  renderContent(pageText) {
    return (
      <div style={ { backgroundColor: 'white', height: '100%', textAlign: 'center' } }>
        <WingBlank>
          <div style={ { paddingTop: 60 } }>
            Clicked “
            { pageText }” tab， show “
            { pageText }” information
            <h1>摇一摇手机添加好友</h1>
            <Button
                    type="primary"
                    onClick={ this.toamp }>
              点击进入AntdMobile练习
            </Button>
          </div>
          <a
             style={ { display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' } }
             onClick={ (e) => {
                         e.preventDefault();
                         this.setState({
                           hidden: !this.state.hidden,
                         });
                       } }>Click to show/hide tab-bar</a>
          <a
             style={ { display: 'block', marginBottom: 600, color: '#108ee9' } }
             onClick={ (e) => {
                         e.preventDefault();
                         this.setState({
                           fullScreen: !this.state.fullScreen,
                         });
                       } }>Click to switch fullscreen</a>
        </WingBlank>
      </div>
      );
  }

  render() {
    let iconDiv = (url) => {
      var style = {
        width: '22px',
        height: '22px',
        background: url
      }
      return (
        <div style={ style } />
      )
    }
    return (
      <div className={ this.state.fullScreen ? `${style.appContent}` : `${style.appContent} ${style.h400}` }>
        <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={ this.state.hidden }>
          <TabBar.Item
                       title="首页"
                       key="home"
                       icon={ iconDiv('url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat') }
                       selectedIcon={ iconDiv('url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat') }
                       selected={ this.state.selectedTab === 'homeTab' }
                       badge={ 1 }
                       onPress={ () => {
                                   this.setState({
                                     selectedTab: 'homeTab',
                                   });
                                 } }
                       data-seed="logId">
            { this.renderContent('Life') }
          </TabBar.Item>
          <TabBar.Item
                       icon={ iconDiv('url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat') }
                       selectedIcon={ iconDiv('url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat') }
                       title="Koubei"
                       key="Koubei"
                       badge={ 'new' }
                       selected={ this.state.selectedTab === 'cart' }
                       onPress={ () => {
                                   this.setState({
                                     selectedTab: 'cart',
                                   });
                                 } }
                       data-seed="logId1">
            <Counter />
          </TabBar.Item>
          <TabBar.Item
                       icon={ iconDiv('url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat') }
                       selectedIcon={ iconDiv('url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat') }
                       title="控件练习"
                       key="andtmobiletest"
                       dot
                       selected={ this.state.selectedTab === 'andtmobiletestTab' }
                       onPress={ () => {
                                   this.setState({
                                     selectedTab: 'andtmobiletestTab',
                                   });
                                 } }>
            { this.renderContent('已经不用这种方式了') }
          </TabBar.Item>
          <TabBar.Item
                       icon={ { uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' } }
                       selectedIcon={ { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' } }
                       title="My"
                       key="my"
                       selected={ this.state.selectedTab === 'yellowTab' }
                       onPress={ () => {
                                   this.setState({
                                     selectedTab: 'yellowTab',
                                   });
                                 } }>
            { this.renderContent('My') }
          </TabBar.Item>
        </TabBar>
      </div>
      );
  }
}