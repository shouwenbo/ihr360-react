import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import todoAction from '@/action/todo'
import store from '@/store'
import { Tabs, WhiteSpace, WingBlank, Grid, SearchBar, Card, Button, PullToRefresh, ListView } from 'antd-mobile';
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

const tabDatas = [
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

class Todo extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource,
      isLoading: true,
      height: (document.documentElement.clientHeight * 3) / 4,
    };
  }

  componentDidMount() {
    const {value, onReach} = this.props;
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    this.setState({
      height: hei,
    });
    setTimeout(() => {
      onReach();
    }, 600);
  }
  allDatas = []
  componentWillReceiveProps = (props) => {
    let todo = props.value.todo;
    let nextDatas = todo.nextDatas;
    this.allDatas = [
      ...this.allDatas,
      ...nextDatas
    ];
    console.log(todo);
    if (todo.hasMore) {
      this.setState({
        isLoading: true,
      });
      setTimeout(() => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.allDatas),
          isLoading: false,
        });
      }, 1111);
    }
  }
  render() {
    const {value, onReach} = this.props;
    let todo = value.todo;
    const separator = (sectionID, rowID) => (
      <div
           key={ `${sectionID}-${rowID}` }
           style={ { backgroundColor: '#F5F5F9', height: 8, borderTop: '1px solid #ECECED', borderBottom: '1px solid #ECECED', } } />
    );
    const row = (rowData, sectionID, rowID) => {
      //console.log(rowData);
      return (
        <div
             key={ rowID }
             style={ { padding: '0 15px' } }>
          <div style={ { lineHeight: '50px', color: '#888', fontSize: 18, borderBottom: '1px solid #F6F6F6', } }>
            { rowData.title }
          </div>
          <div style={ { display: '-webkit-box', display: 'flex', padding: '15px 0' } }>
            <img
                 style={ { height: '64px', marginRight: '15px' } }
                 src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png"
                 alt="" />
            <div style={ { lineHeight: 1 } }>
              <div style={ { marginBottom: '8px', fontWeight: 'bold' } }>
                申请人：
                { rowData.name }
              </div>
              <div>
                UniversalID：<span style={ { fontSize: '30px', color: '#FF6E27' } }>{ rowID }</span>
              </div>
            </div>
          </div>
        </div>
        );
    };

    return (
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
                data={ tabDatas }
                activeStyle={ false }
                columnNum={ 3 } />
        </div>
        <div>
          <ListView
                    ref={ el => this.lv = el }
                    dataSource={ this.state.dataSource }
                    renderHeader={ () => <span>新待办</span> }
                    renderFooter={ () => (<div style={ { padding: 30, textAlign: 'center' } }>
                                            { this.state.isLoading ? '正在加载...' : '加载完成' }
                                          </div>) }
                    renderRow={ row }
                    renderSeparator={ separator }
                    style={ { height: this.state.height, overflow: 'auto', } }
                    pageSize={ 4 }
                    onScroll={ () => {
                                 //console.log('scroll');
                               } }
                    scrollRenderAheadDistance={ 500 }
                    onEndReached={ onReach }
                    onEndReachedThreshold={ 10 } />
        </div>
      </Tabs>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onReach: () => {
      dispatch(todoAction.nextDatasAction)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);