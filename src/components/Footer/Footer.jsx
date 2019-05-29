// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import capitalize from 'lodash/capitalize';

import type { Classes } from '../../types';
import styles from './styles';

type Props = {
  classes: Classes,
  children: React.Element<any>,
  color?: 'inherit' | 'default' | 'primary' | 'secondary',
  className?: string,
};

class Footer extends React.PureComponent<Props> {
  static defaultProps = {
    classes: {},
    color: 'inherit',
    className: '',
  };
  render() {
    const { classes, color, className: classNameProp, children } = this.props;
    const className: string = classNames(
      classes.footer,
      {
        [classes[`color${capitalize(color)}`]]: color !== 'inherit',
      },
      classNameProp
    );
    return <div className={className}>{children}</div>;
  }
}

export default withStyles<string, *>(styles)(Footer);
