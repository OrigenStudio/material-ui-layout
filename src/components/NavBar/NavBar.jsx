// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

import styles from './styles';

class NavBar extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    children: PropTypes.element,
    navbarPostion: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const { children, navbarPostion, classes, color, ...other } = this.props;
    return (
      <AppBar position={navbarPostion} color={color}>
        {React.cloneElement(children, { ...other })}
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
