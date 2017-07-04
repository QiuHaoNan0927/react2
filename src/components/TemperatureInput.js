import React, {Component} from 'react'

class TemperatureInput extends Component {
  constructor() {
    super()
  }
  // state = {
  //   temperature: ''
  // }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={:: this.handleChange}/>
      </fieldset>
    )
  }
}

export default TemperatureInput
