import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile'
import changeItem from '@/action/index'
import store from '@/store'
import style from './index.scss'
import icon1c from '@/images/oa/icon1c.png'
import icon1 from '@/images/oa/icon1.png'
import icon2c from '@/images/oa/icon2c.png'
import icon2 from '@/images/oa/icon2.png'
import icon3c from '@/images/oa/icon3c.png'
import icon3 from '@/images/oa/icon3.png'
import icon4c from '@/images/oa/icon4c.png'
import icon4 from '@/images/oa/icon4.png'
import Home from '@/page/Home'
import Todo from '@/page/Todo'
import Apply from '@/page/Apply'
import My from '@/page/My'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      hidden: false,
      fullScreen: true
    };
  }
  componentWillReceiveProps = (props) => {
    let index = props.value.index;
  }
  onPress = (e) => {
    const {changeItem} = this.props;
    changeItem(e);
  }
  render() {
    const {index} = this.props.value;
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
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={ this.state.hidden }>
          <TabBar.Item
                       title="首页"
                       key="home"
                       icon={ { uri: icon1c } }
                       selectedIcon={ { uri: icon1 } }
                       selected={ index.selectedTab === 'homeTab' }
                       onPress={ () => {
                                   this.onPress('homeTab');
                                 } }
                       data-seed="logId">
            <Home />
          </TabBar.Item>
          <TabBar.Item
                       icon={ { uri: icon2c } }
                       selectedIcon={ { uri: icon2 } }
                       title="待办"
                       key="todo"
                       selected={ index.selectedTab === 'todoTab' }
                       onPress={ () => {
                                   this.onPress('todoTab');
                                 } }
                       data-seed="logId1">
            <Todo />
          </TabBar.Item>
          <TabBar.Item
                       icon={ { uri: icon3c } }
                       selectedIcon={ { uri: icon3 } }
                       title="申请"
                       key="apply"
                       selected={ index.selectedTab === 'applyTab' }
                       onPress={ () => {
                                   this.onPress('applyTab');
                                 } }>
            <Apply />
          </TabBar.Item>
          <TabBar.Item
                       icon={ { uri: icon4c } }
                       selectedIcon={ { uri: icon4 } }
                       title="我的"
                       key="my"
                       selected={ index.selectedTab === 'myTab' }
                       onPress={ () => {
                                   this.onPress('myTab');
                                 } }>
            <My />
          </TabBar.Item>
        </TabBar>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    value: state.index
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeItem: (tabName) => {
      dispatch(changeItem(tabName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);