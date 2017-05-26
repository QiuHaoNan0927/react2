import React, {Component} from 'react'

class Selected extends Component {
  constructor() {
    super()
  }
  state = {
    value: ''
  }
  changeSelect(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div>
        <select value={this.state.value} onChange={:: this.changeSelect}>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>
        <h1>{this.state.value}</h1>
      </div>
    )
  }
}

export default Selected
