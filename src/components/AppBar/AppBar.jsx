// @flow

// TODO Is this component required anymore?

import * as React from 'react';
import MaterialUIAppBar from '@material-ui/core/AppBar';
import type { AppBarProps } from '@material-ui/core/AppBar';

type Props = {
  classes?: $ElementType<AppBarProps, 'classes'>,
  children: React.Element<any>,
  className: string,
  ...AppBarProps,
};

class AppBar extends React.PureComponent<Props> {
  static defaultProps = {
    classes: {},
  };

  render() {
    const {
      children,
      position,
      classes,
      color,
      className,
      ...other
    } = this.props;

    // $FlowFixMe
    const newChildren = React.cloneElement(children, { ...other });
    return (
      <MaterialUIAppBar
        position={position}
        color={color}
        className={className}
        classes={classes}
      >
        {newChildren}
      </MaterialUIAppBar>
    );
  }
}

export default AppBar;
