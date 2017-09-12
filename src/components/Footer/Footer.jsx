import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

class Footer extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.footer}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
