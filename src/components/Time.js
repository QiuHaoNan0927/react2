import React, {Component} from 'react'

class TimeH1 extends Component {
  constructor() {
    super()
  }
  // 设置初始值
  state = {
    time: ''
  }
  // 创建更新函数
  updatatime() {
    this.setState({time: new Date().toLocaleTimeString()})
  }
  // 添加钩子函数
  componentDidMount() {
    this.Inter = setInterval(() => this.updatatime(), 100)
  }
  // 当组件注销时取消定时器
  componentWillUnmount() {
    clearInterval(this.Inter)
  }
  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    )
  }
}

export default TimeH1
