import React, {Component} from 'react'

class FooList extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const arr = ['a', 'b', 'c']
    return (
      <div>
        {arr.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    )
  }
}

export default FooList
