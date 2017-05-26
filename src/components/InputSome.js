import React, {Component} from 'react'

class InputSome extends Component {
  constructor() {
    super()
  }
  state = {
    value: 'hello'
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" name="name" value={this.state.value} onChange={:: this.handleChange}/>
        <p>
          {this.state.value}
        </p>
      </div>
    )
  }
}

export default InputSome
