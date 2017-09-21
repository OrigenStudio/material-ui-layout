// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import DefaultAppBar from 'material-ui/AppBar';

import styles from './styles';

class AppBar extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element,
    navbarPostion: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const { children, navbarPostion, color, ...other } = this.props;
    return (
      <DefaultAppBar position={navbarPostion} color={color}>
        {React.cloneElement(children, { ...other })}
      </DefaultAppBar>
    );
  }
}

export default withStyles(styles)(AppBar);
