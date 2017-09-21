// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MaterialUIAppBar from 'material-ui/AppBar';


import styles from './styles';

class AppBar extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    children: PropTypes.element,
    position: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const { children, position, classes, color, ...other } = this.props;
    return (
      <MaterialUIAppBar position={position} color={color}>
        {React.cloneElement(children, { ...other })}
      </MaterialUIAppBar>
    );
  }
}

export default withStyles(styles)(AppBar);
