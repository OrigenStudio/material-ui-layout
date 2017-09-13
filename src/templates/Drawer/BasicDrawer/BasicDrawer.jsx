import _ from 'lodash';
import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

import styles from './styles';

class BasicDrawer extends React.PureComponent {
  render() {
    const { links, classes } = this.props;
    return (
      <div>
        {_.map(links, link => (
          <List className={classes.list}>
            <ListItem button onClick={link.onClick}>
              <ListItemIcon>
                {link.icon ? <Icon>{link.icon}</Icon> : <Icon>arrow_right</Icon>}
              </ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          </List>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(BasicDrawer);
