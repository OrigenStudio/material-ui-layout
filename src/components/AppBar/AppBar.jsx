// @flow

// TODO Is this component required anymore?

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MaterialUIAppBar from '@material-ui/core/AppBar';
import type { Position, Color } from '@material-ui/core/AppBar/AppBar';

import type { Classes } from '../../types';
import styles from './styles';

type Props = {
  classes: Classes,
  children: React.Element<any>,
  position: Position,
  color: Color,
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
