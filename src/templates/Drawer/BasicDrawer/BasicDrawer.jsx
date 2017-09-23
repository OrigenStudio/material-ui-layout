import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

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
        <List className={classes.list}>
          {_.map(links, link => (
            <ListItem button onClick={link.onClick} key={`link-${link.label}`}>
              <ListItemIcon>
                {link.icon ? <Icon>{link.icon}</Icon> : <Icon>arrow_right</Icon>}
              </ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(BasicDrawer);
