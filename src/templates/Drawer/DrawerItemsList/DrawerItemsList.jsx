import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

import styles from './styles';

class DrawerItemsList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
  };
  render() {
    const { items, classes } = this.props;
    return (
      <List className={classes.list}>
        {map(items, item => (
          <ListItem button onClick={item.onClick} key={`item-${item.label}`}>
            <ListItemIcon>
              {item.icon ? <Icon>{item.icon}</Icon> : <Icon>arrow_right</Icon>}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(DrawerItemsList);
