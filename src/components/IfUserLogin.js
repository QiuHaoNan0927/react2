import React, {Component} from 'react'

class IfUserLogin extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.flage) {
      return <h1>h111</h1>
    }
    return <h2>h2222</h2>
  }
}

export default IfUserLogin
