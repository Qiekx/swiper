import React, { PropTypes } from 'react'

class Test extends React.Component {
  constructor(){
    super();
    this.state = {show:true}
  }
  render () {
    return(
      <div>
        我是 test 组件:{this.props.childNum}
      </div>
    )
  }
}

export default Test;
