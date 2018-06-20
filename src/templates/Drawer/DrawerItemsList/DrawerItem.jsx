// @flow

import React, { PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

type Props = {
  item: Object,
  closeDrawer: Function,
};

class DrawerItem extends PureComponent<Props> {
  handleClick = () => {
    this.props.item.onClick();
    this.props.closeDrawer();
  };

  renderIcon = (item: Object) => {
    if (item.icon) {
      return <item.icon />;
    } else if (item.iconName) {
      return <Icon>{item.iconName}</Icon>;
    }
    return <Icon>arrow_right</Icon>;
  };

  render() {
    const { item } = this.props;
    return (
      <ListItem
        button
        onClick={item.onClick ? this.handleClick : null}
        href={item.href || null}
        component={item.href ? 'a' : undefined}
      >
        <ListItemIcon>{this.renderIcon(item)}</ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItem>
    );
  }
}

export default DrawerItem;
