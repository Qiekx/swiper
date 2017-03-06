import React, { PropTypes } from 'react';

import Test from './Test';

class App extends React.Component {
  constructor(){
    super();
    this.state={ num: 0, show: true }
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps, nextState)
    if(nextState.num<5) {
      return true
    }
    return false
  }
  render () {
    return(
      <div>
        数值:{this.state.num}
        <button onClick={() => this.setState({num: this.state.num+1})}>
          click
        </button>
        <button onClick={() => this.setState({show: false})}>
          销毁test
        </button>
        {this.state.show ? <Test childNum={this.state.num} /> : null}
      </div>
    )
  }
}

export default App;
