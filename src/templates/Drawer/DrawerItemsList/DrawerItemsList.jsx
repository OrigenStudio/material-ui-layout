import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import styles from './styles';

class DrawerItemsList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
  };

  renderIcon = item => {
    if (item.icon) {
      return <item.icon />;
    } else if (item.iconName) {
      return <Icon>{item.iconName}</Icon>;
    }
    return <Icon>arrow_right</Icon>;
  };

  render() {
    const { items, classes } = this.props;
    return (
      <List className={classes.list}>
        {map(items, item => (
          <ListItem button onClick={item.onClick} key={`item-${item.label}`}>
            <ListItemIcon>{this.renderIcon(item)}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(DrawerItemsList);
