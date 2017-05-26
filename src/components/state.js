import React, {Component} from 'react'

class StateText extends Component {
  constructor() {
    super()
  }
  handleClick() {
    this.setState({
      liked: !this.state.liked
    })
  }
  state = {
    liked: false
  }
  render() {
    let text = this.state.liked
      ? 'like'
      : 'dont like';
    return (
      <div onClick={:: this.handleClick}>
        {text}
      </div>
    )
  }
}

export default StateText
