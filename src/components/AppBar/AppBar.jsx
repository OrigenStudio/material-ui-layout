// @flow

// TODO Is this component required anymore?

import * as React from 'react';
import MaterialUIAppBar from '@material-ui/core/AppBar';
import type { AppBarProps } from '@material-ui/core/AppBar';

import type { Classes } from '../../types';

type Props = {
  classes: Classes,
  children: React.Element<any>,
  className: string,
  ...AppBarProps,
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

export default AppBar;
