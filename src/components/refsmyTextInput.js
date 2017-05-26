import React, {Component} from 'react'
class TextInput extends Component {
  constructor(props) {
    super(props)
  }
  handleClick() {
    this.refs.myTextInput.focus();
    this.refs.myTextInput.value = '123456'
  }
  render() {
    return (
      <div>
        {/* ref相当于ID来获取当前组件的某个元素 */}
        <input type="text" ref="myTextInput"/> {/* 在ES6写法重如果不加::会导致无法查找到函数方法 所以要绑定作用域 */}
        <input type="button" value="点击登录" onClick={:: this.handleClick}/>
      </div>
    )
  }
}

export default TextInput
