// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import capitalize from 'lodash/capitalize';

import styles from './styles';

type Props = {
  classes: { [string]: string },
  children: React.Element<any>,
  color: string,
  className: string,
};

class Footer extends React.PureComponent<Props> {
  render() {
    const {
      classes, color, className: classNameProp, children,
    } = this.props;
    const className: string = classNames(
      classes.footer,
      {
        [classes[`color${capitalize(color)}`]]: color !== 'inherit',
      },
      classNameProp,
    );
    return <div className={className}>{children}</div>;
  }
}

export default withStyles(styles)(Footer);
