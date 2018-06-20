// @flow

// TODO Is this component required anymore?

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MaterialUIAppBar from '@material-ui/core/AppBar';

import styles from './styles';

type Props = {
  classes: { [string]: string },
  children: React.Element<any>,
  position: string,
  color: string,
  className: string,
};

class AppBar extends React.PureComponent<Props> {
  render() {
    const {
      children, position, classes, color, className, ...other
    } = this.props;
    return (
      <MaterialUIAppBar position={position} color={color} className={className}>
        {React.cloneElement(children, { ...other })}
      </MaterialUIAppBar>
    );
  }
}

export default withStyles(styles)(AppBar);
