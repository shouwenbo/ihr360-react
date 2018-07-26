import React, { Component } from 'react'
import { List, Button, WhiteSpace } from 'antd-mobile'
import default_head from '@/images/oa/default_head.png'
import icon4 from '@/images/oa/icon4.png'
import icon5 from '@/images/oa/icon5.png'
import icon6 from '@/images/oa/icon6.png'
import icon7 from '@/images/oa/icon7.png'
import icon8 from '@/images/oa/icon8.png'
import icon9 from '@/images/oa/icon9.png'
import icon10 from '@/images/oa/icon10.png'
import { withRouter } from 'react-router-dom'

const Item = List.Item;
const Brief = Item.Brief;

class MyInfo extends Component {
  render() {
    return (
      <div>
        <List
              renderHeader={ () => '' }
              className="my-list">
          <Item
                extra={ <img
                             src={ default_head }
                             style={ { width: '30px', height: '30px' } } /> }
                thumb={ icon7 }
                arrow="horizontal">
            个人主页
          </Item>
          <Item
                extra={ '上海蓝晓软件' }
                thumb={ icon4 }
                arrow="horizontal">
            公司名称
          </Item>
          <Item
                extra={ '软件开发部' }
                thumb={ icon5 }
                arrow="horizontal">
            部门
          </Item>
          <Item
                extra={ '工程师' }
                thumb={ icon6 }
                arrow="horizontal">
            职位
          </Item>
        </List>
        <WhiteSpace size="lg" />
        <Button>
          退出登录
        </Button>
        <WhiteSpace />
      </div>
    )
  }
}

export default withRouter(MyInfo);