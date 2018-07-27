import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { List, Tag, Button } from 'antd-mobile'

class PersonSelector extends Component {
  constructor(props) {
    super(props);
    this.setState({
      data: []
    })
  }
  render() {
    return (
      <div>
        <List.Item
                   extra="请选择"
                   arrow="horizontal"
                   onClick={ () => {
                               this.props.history.push('/Selector');
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
        <Button
                onClick={ this.props.addPerson }
                size="small"
                inline>
          添加人员
        </Button>
      </div>
    )
  }
}

export default withRouter(PersonSelector);