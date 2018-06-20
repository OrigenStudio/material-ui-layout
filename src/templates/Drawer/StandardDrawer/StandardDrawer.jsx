// @flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import DrawerItemsList from '../DrawerItemsList';

import styles from './styles';

type Props = {
  firstList: Array<Object>,
  secondList: Array<Object>,
  classes: Object,
};

class StandardDrawer extends React.PureComponent<Props> {
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
