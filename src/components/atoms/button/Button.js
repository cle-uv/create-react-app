import './Button.css'; // Tell webpack that Button.js uses these styles

import React, { Component } from 'react';

export default class Button extends Component {
  render() {
  // You can use them as regular CSS styles
  return <div className="Button" >Button</div>;
  }
}