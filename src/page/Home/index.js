import React, { Component } from 'react'
import { Carousel, Grid } from 'antd-mobile'
import DateTime from '@/util/DateTime'
import wp1 from '@/images/home/wp1.png'
import wp2 from '@/images/home/wp2.png'
import wp3 from '@/images/home/wp3.png'
import icon5 from '@/images/oa/icon5.png'
import icon6 from '@/images/oa/icon6.png'
import '@/css/custom.css'

const data = [
  {
    icon: icon6,
    text: `考勤打卡`,
  }, {
    icon: icon5,
    text: `团队考勤`,
  }
]

export default class Home extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    date1: '',
    date2: ''
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date1: DateTime.Now.tostr('HH:mm:ss'),
        date2: DateTime.Now.tostr('yyyy-MM-dd dddd')
      })
    }, 1000);

    setTimeout(() => {
      this.setState({
        data: [wp1, wp2, wp3],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <Carousel
                  autoplay={ true }
                  infinite
                  beforeChange={ (from, to) => {
                                   //console.log(`slide from ${from} to ${to}`)
                                 } }
                  afterChange={ index => {
                                  //console.log('slide to', index)
                                } }>
          { this.state.data.map(val => (
              <a
                 key={ val }
                 href="#"
                 style={ { display: 'inline-block', width: '100%', height: this.state.imgHeight } }><img
                                                                                   src={ `${val}` }
                                                                                   alt=""
                                                                                   style={ { width: '100%', verticalAlign: 'top' } }
                                                                                   onLoad={ () => {
                                                                                              window.dispatchEvent(new Event('resize'));
                                                                                              this.setState({
                                                                                                imgHeight: 'auto'
                                                                                              });
                                                                                            } } /></a>
            )) }
        </Carousel>
        <div className="sub-title">
          { this.state.date1 }
          <br />
          { this.state.date2 }
        </div>
        <Grid
              data={ data }
              activeStyle={ false }
              columnNum={ 2 } />
      </div>
    )
  }
}