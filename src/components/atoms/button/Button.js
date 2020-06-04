import React, { Component } from 'react';

import styles from './styles.module.scss'; // Import css modules stylesheet as styles

export default class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}