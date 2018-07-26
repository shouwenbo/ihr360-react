import React, { Component } from 'react'
import { List } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import default_head from '@/images/oa/default_head.png'
import './index.css'

const Item = List.Item;
const Brief = Item.Brief;

class My extends Component {
  render() {
    return (
      <div>
        <List
              renderHeader={ () => '我的' }
              className="my-list">
          <Item
                arrow="horizontal"
                thumb={ <img
                             src={ default_head }
                             style={ { width: '77px', height: '77px' } }
                             alt="我的头像" /> }
                multipleLine
                onClick={ () => {
                            this.props.history.push('/MyInfo');
                          } }>
            寿文博
            <Brief>
              17301641964
            </Brief>
          </Item>
        </List>
        <List renderHeader={ () => '' }>
          <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {
                          } }>
            工资单
          </Item>
          <Item
                thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                onClick={ () => {
                          } }
                arrow="horizontal">
            待办
          </Item>
        </List>
        <List renderHeader={ () => '' }>
          <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {
                          } }>
            工资单
          </Item>
          <Item
                thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                onClick={ () => {
                          } }
                arrow="horizontal">
            待办
          </Item>
        </List>
        <List renderHeader={ () => '' }>
          <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={ () => {
                          } }>
            工资单
          </Item>
          <Item
                thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                onClick={ () => {
                          } }
                arrow="horizontal">
            待办
          </Item>
        </List>
      </div>
    )
  }
}

export default withRouter(My);