import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';

import DrawerItemsList from '../DrawerItemsList';

import styles from './styles';

class StandardDrawer extends React.PureComponent {
  static propTypes = {
    secondList: PropTypes.arrayOf(PropTypes.shape({})),
    firstList: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
  };

  static defaultProps = {
    firstList: null,
    secondList: null,
  };
  render() {
    const { firstList, secondList, classes } = this.props;
    return (
      <div className={classes.wrapper}>
        {firstList ? <DrawerItemsList items={firstList} /> : null}
        {firstList && secondList ? <Divider /> : null}
        {secondList ? <DrawerItemsList items={secondList} /> : null}
      </div>
    );
  }
}

export default withStyles(styles)(StandardDrawer);
