// @flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import DrawerItemsList from '../DrawerItemsList';

import type { Classes } from '../../../types';
import styles from './styles';

type Props = {
  firstList?: Array<Object>,
  secondList?: Array<Object>,
  classes: Classes,
  closeDrawer: Function,
  closeDrawerOnClick: true | false,
};

class StandardDrawer extends React.PureComponent<Props> {
  static defaultProps = {
    firstList: undefined,
    secondList: undefined,
  };

  render() {
    const {
      firstList,
      secondList,
      classes,
      closeDrawer,
      closeDrawerOnClick,
    } = this.props;
    return (
      <div className={classes.wrapper}>
        {firstList ? (
          <DrawerItemsList
            items={firstList}
            closeDrawer={closeDrawer}
            closeDrawerOnClick={closeDrawerOnClick}
          />
        ) : null}
        {firstList && secondList ? <Divider /> : null}
        {secondList ? (
          <DrawerItemsList
            items={secondList}
            closeDrawer={closeDrawer}
            closeDrawerOnClick={closeDrawerOnClick}
          />
        ) : null}
      </div>
    );
  }
}

export default withStyles<string, *>(styles)(StandardDrawer);
