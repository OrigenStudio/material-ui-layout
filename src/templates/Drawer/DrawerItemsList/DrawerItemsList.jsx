import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import DrawerItem from './DrawerItem';

import styles from './styles';

class DrawerItemsList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
  };

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
