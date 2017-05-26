import React, {Component} from 'react'

class InpurToUpperCase extends Component {
  constructor() {
    super()
  }
  state = {
    value: ''
  }
  toUpperCase(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div>
        {/* <textarea type="text" name="name" value={this.state.value} onChange={:: this.toUpperCase}/> */}
        <input type="text" name="name" value={this.state.value} onChange={:: this.toUpperCase}/>
        <h1>{this.state.value.toUpperCase()}</h1>
      </div>
    )
  }
}

export default InpurToUpperCase
