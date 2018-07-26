import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { List, Tag, Button } from 'antd-mobile'

class PersonSelector extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data)
    this.setState({
      data: this.props.data
    });
    console.log(this.state);
  }
  //componentWillReceiveProps = (props) => {
  //  console.log('接受props');
  //  console.log(props);
  //}
  render() {
    return (
      <div>
        <List.Item
                   extra="请选择"
                   arrow="horizontal"
                   onClick={ () => {
                               //this.props.history.push('/Selector');
                             } }>
          { this.props.title }
        </List.Item>
        <div className="tag-container">
          { this.props.data.map(function(item, index) {
              return (
                <div key={ index }>
                  <Tag
                       closable
                       onClose={ () => {
                                 } }
                       afterClose={ () => {
                                    } }>
                    { item }
                  </Tag>
                </div>
              )
            }) }
        </div>
        <Button onClick={ this.props.onClick }>
          添加人员
        </Button>
      </div>
    )
  }
}

export default withRouter(PersonSelector);