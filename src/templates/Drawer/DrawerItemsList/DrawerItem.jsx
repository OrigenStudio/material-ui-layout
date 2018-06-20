// @flow

import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

type Item = {
  iconName?: string,
  icon?: any, // Not the best solution
  onClick?: Function,
  label: string,
  href?: string,
};

type Props = {
  item: Item,
  closeDrawer: Function,
};

class DrawerItem extends React.PureComponent<Props> {
  handleClick = () => {
    if (this.props.item.onClick) {
      this.props.item.onClick();
      this.props.closeDrawer();
    }
  };

  renderIcon = (item: Item) => {
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
        href={item.href || undefined}
        component={item.href ? 'a' : undefined}
      >
        <ListItemIcon>{this.renderIcon(item)}</ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItem>
    );
  }
}

export default DrawerItem;
