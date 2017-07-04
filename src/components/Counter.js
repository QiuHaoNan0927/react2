import React, {PropTypes} from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //从组件的props属性中导入四个方法和一个变量 < div > MyComponent < /div>
    const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;
    return (
      <p>
        Clicked: {counter}
        times {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    )
  }
}
