import React, { Component } from 'react'
import { connect } from 'react-redux'
import increaseAction from '@/action/demo/counter'

class Counter extends Component {
  render() {
    console.log(this.props);
    const {value, onIncreaseClick} = this.props;
    return (
      <div>
        <span>{ value }</span>
        <button onClick={ onIncreaseClick }>
          Increase
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.counter.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);