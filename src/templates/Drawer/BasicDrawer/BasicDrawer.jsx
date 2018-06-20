// @flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import DrawerItemsList from '../DrawerItemsList';

import styles from './styles';

type Props = {
  links: Array<Object>,
  classes: Object,
  closeDrawer: Function,
  closeDrawerOnClick: true | false,
};

class BasicDrawer extends React.PureComponent<Props> {
  static defaultProps = {
    closeDrawerOnClick: false,
  };
  render() {
    const {
      links, classes, closeDrawer, closeDrawerOnClick,
    } = this.props;
    return (
      <div className={classes.wrapper}>
        <DrawerItemsList
          items={links}
          closeDrawer={closeDrawer}
          closeDrawerOnClick={closeDrawerOnClick}
        />
      </div>
    );
  }
}

export default withStyles(styles)(BasicDrawer);
