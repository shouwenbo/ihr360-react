import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { withRouter } from 'react-router-dom'
import { WhiteSpace, WingBlank, Steps, Card, List, InputItem, Toast, ImagePicker, TextareaItem, Tag } from 'antd-mobile'
//import Selector from '@/component/TagArea'
import PersonSelector from '@/component/PersonSelector'
import default_head from '@/images/oa/default_head.png'
import '@/css/custom.css'

const Step = Steps.Step;
const Item = List.Item;

const customIcon = () => (
  <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 42 42"
       className="am-icon am-icon-md">
    <g
       fillRule="evenodd"
       stroke="transparent"
       strokeWidth="4">
      <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
      <path
            fill="#FFF"
            d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
    </g>
  </svg>
);

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class HandleTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: data
    };
  }
  onChange = (files, type, index) => {
    this.setState({
      files,
    });
  }
  saveStore = () => {
    //const {getFieldValue} = this.props.form;
    const {getFieldsValue} = this.props.form;
    //console.log(getFieldValue('count'));
    console.log(getFieldsValue());
  }
  render() {
    console.log('render里面的props', this.props);
    const {getFieldProps, getFieldError} = this.props.form;
    const {files} = this.state;
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
                       title="陈佳荣"
                       thumb={ default_head }
                       thumbStyle={ { width: '40px', 'height': '40px' } }
                       extra={ <span>蓝晓软件</span> } />
          <Card.Body>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td style={ { 'wordBreak': 'keep-all' } }>
                      流水号：
                    </td>
                    <td>
                      jq00001
                    </td>
                  </tr>
                  <tr>
                    <td style={ { 'wordBreak': 'keep-all' } }>
                      申请时间：
                    </td>
                    <td>
                      2000-01-01 00:00:00
                    </td>
                  </tr>
                  <tr>
                    <td style={ { 'wordBreak': 'keep-all' } }>
                      起止时间：
                    </td>
                    <td>
                      2018-01-01 20:01:01 至 2018-01-02 20:01:01 共1天
                    </td>
                  </tr>
                  <tr>
                    <td style={ { 'wordBreak': 'keep-all' } }>
                      请假类型
                    </td>
                    <td>
                      事假
                    </td>
                  </tr>
                  <tr>
                    <td style={ { 'wordBreak': 'keep-all' } }>
                      申请事由
                    </td>
                    <td>
                      有事情
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
        <Steps
               current={ 1 }
               size="small">
          <Step
                title="李四：同意"
                icon={ customIcon() } />
          <Step
                title="张三：退回"
                description="理由：xxxxxxx"
                icon={ customIcon() } />
          <Step
                title="李四：同意"
                status="error"
                icon={ customIcon() } />
          <Step
                title="等待处理"
                description="请处理" />
        </Steps>
        <WhiteSpace size="lg" />
        <form>
          <List renderHeader={ () => '审批意见' }>
            <ImagePicker
                         files={ files }
                         onChange={ this.onChange }
                         onImageClick={ (index, fs) => console.log(index, fs) }
                         selectable={ files.length < 5 }
                         accept="*" />
            <TextareaItem
                          {...getFieldProps( 'count')}
                          rows={ 5 }
                          count={ 100 } />
          </List>
          <WhiteSpace size="md" />
          <List>
            <PersonSelector
                            ref="spr"
                            title="请选择审批人"
                            data={ ['陈佳荣', '马昌波'] }
                            onClick={ () => {
                                        //this.saveStore();
                                        //this.refs.spr.props.data.push('dsadas');
                                      } } />
          </List>
          <WhiteSpace size="md" />
          <List>
            <PersonSelector
                            title="请选择抄送人"
                            data={ ['刘啸', '董涛'] } />
          </List>
        </form>
      </WingBlank>
    )
  }
}

export default withRouter(createForm()(HandleTodo));