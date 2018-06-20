import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import capitalize from 'lodash/capitalize';

import styles from './styles';

class Footer extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { classes, color, className: classNameProp, children } = this.props;
    const className = classNames(
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
