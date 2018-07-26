import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { WhiteSpace, WingBlank, Button, List, Accordion } from 'antd-mobile'
import default_head from '@/images/oa/default_head.png'
import '@/css/custom.css'

class Selector extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={ { marginTop: 10, marginBottom: 10 } }>
        <Accordion
                   defaultActiveKey="0"
                   className="my-accordion"
                   onChange={ this.onChange }>
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item onClick={ () => {
                                     this.props.history.goBack();
                                   } }>
                content 1
              </List.Item>
              <List.Item>
                content 2
              </List.Item>
              <List.Item>
                content 3
              </List.Item>
              <Accordion
                         defaultActiveKey="0"
                         className="my-accordion"
                         onChange={ this.onChange }>
                <Accordion.Panel header="Title 1">
                  <List className="my-list">
                    <List.Item>
                      content - 1
                    </List.Item>
                    <List.Item>
                      content - 2
                    </List.Item>
                    <List.Item>
                      content - 3
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion>
            </List>
          </Accordion.Panel>
          <Accordion.Panel
                           header="Title 2"
                           className="pad">
            this is panel content2 or other
          </Accordion.Panel>
          <Accordion.Panel
                           header="Title 3"
                           className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
    )
  }
}

export default withRouter(Selector);