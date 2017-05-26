import React, {Component} from 'react'

class BoilingVerdict extends Component {
  constructor() {
    super()
  }

  render() {
    if (this.props.celsius >= 100) {
      return <p>水开了</p>
    } else {
      return <p>水没开了</p>
    }
  }
}

export default BoilingVerdict
