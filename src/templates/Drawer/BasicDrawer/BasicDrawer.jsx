import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import DrawerItemsList from '../DrawerItemsList';

import styles from './styles';

class BasicDrawer extends React.PureComponent {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
  };
  render() {
    const { links, classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <DrawerItemsList items={links} />
      </div>
    );
  }
}

export default withStyles(styles)(BasicDrawer);
