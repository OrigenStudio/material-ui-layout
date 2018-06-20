// @flow

import map from 'lodash/map';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import DrawerItem from './DrawerItem';

import styles from './styles';

type Props = {
  items: Array<Object>,
  classes: Object,
  closeDrawer: Function,
  closeDrawerOnClick: true | false,
};

class DrawerItemsList extends React.PureComponent<Props> {
  render() {
    const {
      items, classes, closeDrawer, closeDrawerOnClick,
    } = this.props;
    return (
      <List className={classes.list}>
        {map(items, item => (
          <DrawerItem
            key={`item-${item.label}`}
            item={item}
            closeDrawer={closeDrawerOnClick ? closeDrawer : () => {}}
          />
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(DrawerItemsList);
