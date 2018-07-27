import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}


export default class Todo extends Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: (document.documentElement.clientHeight * 3) / 4,
    };
  }

  componentDidMount() {
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
        height: hei,
      });
    }, 600);
  }

  onEndReached = (event) => {
    console.log('什么鬼，我到都最底了');
    console.log(event);
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
  }

  render() {

    const separator = (sectionID, rowID) => (
      <div
           key={ `${sectionID}-${rowID}` }
           style={ { backgroundColor: '#F5F5F9', height: 8, borderTop: '1px solid #ECECED', borderBottom: '1px solid #ECECED', } } />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div
             key={ rowID }
             style={ { padding: '0 15px' } }>
          <div style={ { lineHeight: '50px', color: '#888', fontSize: 18, borderBottom: '1px solid #F6F6F6', } }>
            { obj.title }
          </div>
          <div style={ { display: 'flex', padding: '15px 0' } }>
            <img
                 style={ { height: '64px', marginRight: '15px' } }
                 src={ obj.img }
                 alt="" />
            <div style={ { lineHeight: 1 } }>
              <div style={ { marginBottom: '8px', fontWeight: 'bold' } }>
                { obj.des }
              </div>
              <div>
                <span style={ { fontSize: '30px', color: '#FF6E27' } }>35</span>¥
                { rowID }
              </div>
            </div>
          </div>
        </div>
        );
    };

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
                  data={ tabDatas }
                  activeStyle={ false }
                  columnNum={ 3 } />
          </div>
          <div>
            <ListView
                      ref={ el => this.lv = el }
                      dataSource={ this.state.dataSource }
                      renderHeader={ () => <span>header</span> }
                      renderFooter={ () => (<div style={ { padding: 30, textAlign: 'center' } }>
                                              { this.state.isLoading ? 'Loading...' : 'Loaded' }
                                            </div>) }
                      renderSectionHeader={ sectionData => (
                                              <div>
                                                { `Task ${sectionData.split(' ')[1]}` }
                                              </div>
                                            ) }
                      renderRow={ row }
                      renderSeparator={ separator }
                      style={ { height: this.state.height, overflow: 'auto', } }
                      pageSize={ 4 }
                      onScroll={ () => {
                                   console.log('scroll');
                                 } }
                      scrollRenderAheadDistance={ 500 }
                      onEndReached={ this.onEndReached }
                      onEndReachedThreshold={ 1000 } />
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