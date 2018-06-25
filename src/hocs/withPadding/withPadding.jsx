import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import styles from './styles';

const withPadding = (options = {}) => Component => {
  const ComponentWithPadding = ({ classes, ...props }) => (
    <div
      className={classNames(classes.wrapper, {
        [classes.scrollingPadding]: options.scrolling,
        [classes.growingPadding]: !options.scrolling,
      })}
    >
      <Component {...props} />
    </div>
  );
  return withStyles(styles)(ComponentWithPadding);
};

export default withPadding;
