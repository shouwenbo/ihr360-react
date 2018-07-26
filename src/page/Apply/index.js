import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import icon5 from '@/images/oa/icon5.png'
import icon6 from '@/images/oa/icon6.png'
import icon7 from '@/images/oa/icon7.png'
import icon8 from '@/images/oa/icon8.png'
import icon9 from '@/images/oa/icon9.png'
import '@/css/custom.css'

const data = [
  {
    icon: icon5,
    text: `休假申请`,
  }, {
    icon: icon6,
    text: `加班申请`,
  }, {
    icon: icon7,
    text: `外出申请`,
  }, {
    icon: icon8,
    text: `出差申请`,
  }, {
    icon: icon9,
    text: `申诉申请`,
  }
]

export default class Todo extends Component {
  render() {
    return (
      <div>
        <div className="sub-title">
          考勤假期
        </div>
        <Grid
              data={ data }
              activeStyle={ false }
              columnNum={ 3 } />
      </div>
    )
  }
}