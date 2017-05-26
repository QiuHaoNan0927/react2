import React, {Component} from 'react'

class TimeProps extends Component {
  constructor() {
    super()
  }
  // state = {
  //   data: new Date()
  // }
  render() {
    return (
      <div className="">
        <div>{this.props.data.toLocaleTimeString()}</div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default TimeProps
