require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import HookFun from './HookFun'
import StateText from './state'
import TextInput from './refsmyTextInput'
import Foo from './foo'
import InputSome from './InputSome'
import GetAjax from './GetAjax'
import TimeH1 from './Time'
import TimeProps from './TimeProps'
import Forlist from './ForList'
import TodoApp from './TodoApp'
import IfUserLogin from './IfUserLogin'
import InpurToUpperCase from './InputToUpperCase'
import Selected from './Selected'
import MoreInput from './MoreInput'

let yeomanImage = require('../images/yeoman.png');
let helloWorld = 'helloWorld'
let titleNumber = 123

class AppComponent extends React.Component {
  state = {
    data: new Date(),
    flage: true
  }
  updatatime() {
    this.setState({data: new Date()})
  }
  componentDidMount() {
    setInterval(() => this.updatatime(), 100)
  }

  changeFlage() {
    this.setState((prevState) => ({
      flage: !prevState.flage
    }));
    console.log(this.refs.flage1.props.flage)
  }
  render() {
    return (
      <div className="index">
        <button onClick={:: this.changeFlage}>flage</button>
        <IfUserLogin flage={this.state.flage} ref="flage1"></IfUserLogin>
        <TodoApp></TodoApp>
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <h1 className={helloWorld}>hello world!</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
        <InpurToUpperCase></InpurToUpperCase>
        <Selected></Selected>
        <MoreInput></MoreInput>
        {/* <Foo></Foo>
          <TextInput></TextInput>
          <StateText></StateText>
          <InputSome></InputSome>
          <HookFun name={titleNumber}></HookFun>
          <GetAjax url='https://api.github.com/users/octocat/gists'></GetAjax>
          <TimeH1></TimeH1>
          <TimeProps data={this.state.data} text='父向子传递参数'></TimeProps>
        <Forlist></Forlist> */}
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
