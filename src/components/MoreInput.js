import React, {Component} from 'react'

class MoreInput extends Component {
  constructor() {
    super()
  }
  state = {
    checkbox: true,
    text: ''
  }
  change(e) {
    const value = e.target.type === 'checkbox'
      ? e.target.checked
      : e.target.value
    this.setState({
      [e.target.name]: value
    });
  }
  render() {
    return (
      <div>
        <input type="checkbox" name="checkbox" checked={this.state.checkbox} onChange={:: this.change}/>
        <h1>{this.state.checkbox.toString()}</h1>
        <input type="text" name="text" value={this.state.text} onChange={:: this.change}/>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

export default MoreInput
