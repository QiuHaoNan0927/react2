import React, {Component} from 'react'

class HookFun extends Component {
  constructor() {
    super()
  }
  state = {
    opacity: 1.0
  }
  componentDidMount() {
    let opacity = this.state.opacity
    this.time = setInterval(() => {
      opacity -= .05
      if (opacity < 0.1) {
        opacity = 1
      }
      this.setState({opacity: opacity})
    }, 100)
  }
  render() {
    return (
      <div style={{
        opacity: this.state.opacity
      }}>Color and Opacity{this.props.name}</div>
    )
  }
}

export default HookFun
