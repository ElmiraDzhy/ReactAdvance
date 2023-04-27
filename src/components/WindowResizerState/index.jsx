import React, { Component } from 'react'

export default class WindowResizer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
  }
  

  resizeHandler = e => {
    this.setState({
      x: e.target.innerWidth,
      y: e.target.innerHeight,
    });
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.resizeHandler);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resizeHandler);
  };

  render() {
    return this.props.children( this.state );
  }
}
