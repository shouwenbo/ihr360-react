import React, { Component} from 'react'
import Action from '../action/action'

class App extends Component{
  constructor(){
    super();
  }
  render(){
    let {title,list} = this.props.actor;
    let {add, del} = this.props;
    return(
      <div>
      <h1 className='App'>{title}</h1>
      <ul>
      {
        list.map((value,key) => {
          return(
          <li key={key}>
          {value} :
          <button onClick={()=>{del(key)}}>删除数据</button>
          </li>
          )
        })
      }
      </ul>
      <input ref={inp => {this.inp = inp}} />
      <button onClick={() => {add(this.inp.value)}}>添加一个值进入我们的列表</button>
      </div>
      )
  }
}

export default App;