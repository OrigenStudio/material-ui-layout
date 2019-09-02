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

const Footer = ({ classes, color, className, children }: Props) => (
  <div
    className={classNames(
      classes.footer,
      {
        [classes[`color${capitalize(color)}`]]: color !== 'inherit',
      },
      className
    )}
  >
    {children}
  </div>
);

Footer.defaultProps = {
  classes: {},
  color: 'inherit',
  className: '',
};

export default withStyles<string, *>(styles)(React.memo<Props>(Footer));
