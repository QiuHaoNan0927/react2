import React, {Component} from 'react'

class Foo extends Component {
  constructor() {
    super()
  }
  // propTypes : {
  //   title: React.PropTypes.string.isRequired
  // }
  static defaultProps = {
    title: 'hello world'
  }
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

export default Foo
