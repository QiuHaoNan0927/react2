import React, {Component} from 'react'
import TodoList from './TodoList'
class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.submit =:: this.submit
  }
  state = {
    items: [],
    text: ''
  }
  submit(e) {
    e.preventDefault()
    let newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState((prevState) => ({items: prevState.items.concat(newItem), text: ''}))
  }
  change(e) {
    this.setState({text: e.target.value})
  }
  render() {
    return (
      <div>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.submit}>
          <input type="text" name="name" value={this.state.text} onChange={:: this.change}/>
          <button>添加第{this.state.items.length + 1}条</button>
        </form>
      </div>
    )
  }
}

export default TodoApp
