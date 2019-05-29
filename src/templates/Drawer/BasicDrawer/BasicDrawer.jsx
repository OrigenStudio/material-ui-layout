// @flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import DrawerItemsList from '../DrawerItemsList';

import type { Classes } from '../../../types';
import styles from './styles';

type Props = {
  links: Array<Object>,
  classes: Classes,
  closeDrawer: Function,
  closeDrawerOnClick: true | false,
};

class BasicDrawer extends React.PureComponent<Props> {
  static defaultProps = {
    closeDrawerOnClick: false,
  };
  render() {
    const { links, classes, closeDrawer, closeDrawerOnClick } = this.props;
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

export default withStyles<string, *>(styles)(BasicDrawer);
