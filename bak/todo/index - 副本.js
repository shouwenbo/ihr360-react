import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Tabs, WhiteSpace, WingBlank, Grid, SearchBar, Card, Button, PullToRefresh } from 'antd-mobile';
import icon4 from '@/images/oa/icon4.png'
import icon5 from '@/images/oa/icon5.png'
import icon6 from '@/images/oa/icon6.png'
import icon7 from '@/images/oa/icon7.png'
import icon8 from '@/images/oa/icon8.png'
import icon9 from '@/images/oa/icon9.png'
import icon10 from '@/images/oa/icon10.png'
import '@/css/custom.css'

const tabs = [
  {
    title: '分类',
    sub: 'type'
  },
  {
    title: '待办',
    sub: 'todo'
  }
];

const data = [
  {
    icon: icon5,
    text: `休假审批`,
  }, {
    icon: icon6,
    text: `加班审批`,
  }, {
    icon: icon7,
    text: `外出审批`,
  }, {
    icon: icon8,
    text: `出差审批`,
  }, {
    icon: icon9,
    text: `申诉审批`,
  }, {
    icon: icon10,
    text: `外出审批`,
  }
]

function genData() {
  const dataArr = [];
  for (let i = 0; i < 5; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

let jsq = 5;


export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
  }
  cardClick = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
  }
  render() {
    return (
      <div>
        <Tabs
              tabs={ tabs }
              initialPage={ 1 }
              onChange={ (tab, index) => {
                           console.log('onChange', index, tab);
                         } }
              onTabClick={ (tab, index) => {
                             console.log('onTabClick', index, tab);
                           } }>
          <div>
            <div className="sub-title">
              考勤假期
            </div>
            <Grid
                  data={ data }
                  activeStyle={ false }
                  columnNum={ 3 } />
          </div>
          <div>
            <SearchBar
                       placeholder="Search"
                       onSubmit={ value => console.log(value, 'onSubmit') }
                       onClear={ value => console.log(value, 'onClear') }
                       onFocus={ () => console.log('onFocus') }
                       onBlur={ () => console.log('onBlur') }
                       onCancel={ () => console.log('onCancel') }
                       showCancelButton
                       onChange={ this.onChange } />
            <WhiteSpace size="lg" />
            <PullToRefresh
                           damping={ 120 }
                           ref={ el => this.ptr = el }
                           style={ { height: this.state.height, overflow: 'auto', } }
                           indicator={ this.state.down ? {
                                         deactivate: '下拉可以刷新'
                                       } : {
                                         deactivate: '上拉可以刷新'
                                       } }
                           direction='up'
                           refreshing={ this.state.refreshing }
                           onRefresh={ () => {
                                         this.setState({
                                           refreshing: true,
                                           data: [...this.state.data, jsq++, jsq++, jsq++, jsq++, jsq++]
                                         });
                                         setTimeout(() => {
                                           this.setState({
                                             refreshing: false
                                           });
                                         }, 1000);
                                       } }>
              { this.state.data.map(i => (
                  <div key={ i }>
                    <Card
                          full
                          onClick={ this.cardClick }>
                      <Card.Header
                                   title={ `假期--事假${i}` }
                                   thumb={ icon4 }
                                   thumbStyle={ { width: '32px', height: '32px' } }
                                   extra={ <span>2017-01-00<br/>02:02:02</span> } />
                      <Card.Body>
                        <div>
                          姓名：张三 蓝晓软件
                          <br /> 时间：2018-06-06 20:00:10 - 21:00
                          <br /> 事由：有事情
                        </div>
                      </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                  </div>
                )) }
            </PullToRefresh>
          </div>
        </Tabs>
      </div>
    )
  }
}


/*
<Card.Footer
             content={ <Button
                               type="ghost"
                               inline
                               size="small"
                               style={ { marginRight: '4px' } }>
                         拒绝
                       </Button> }
             extra={ <Button
                             type="ghost"
                             inline
                             size="small"
                             style={ { marginRight: '4px' } }>
                       同意
                     </Button> } />*/