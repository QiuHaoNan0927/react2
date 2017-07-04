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
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

let yeomanImage = require('../images/yeoman.png');
let helloWorld = 'helloWorld'
let titleNumber = 123

class AppComponent extends React.Component {
  state = {
    data: new Date(),
    flage: true,
    temperature: '',
    scale: 'c'
  }

  render() {
    return (
      <div className="index"></div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
