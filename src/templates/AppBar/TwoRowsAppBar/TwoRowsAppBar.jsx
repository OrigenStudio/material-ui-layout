// @flow

import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import compose from 'recompose/compose';

import type { Classes } from '../../../types';
import styles from './styles';

type Props = {
  classes: Classes,
  topLeftContent: React.Node,
  topCenterContent: React.Node,
  topRightContent: React.Node,
  bottomLeftContent: React.Node,
  bottomCenterContent: React.Node,
  bottomRightContent: React.Node,
  width: string,
  smallScreenWidth: string,
};

// TODO find a way to better overwrite the items styles
const style = {
  item: {
    padding: '0px',
  },
};

class TwoRowsAppBar extends React.PureComponent<Props> {
  static defaultProps = {
    classes: {},
    topLeftContent: null,
    topCenterContent: null,
    topRightContent: null,
    bottomLeftContent: null,
    bottomCenterContent: null,
    bottomRightContent: null,
    smallScreenWidth: 'xs',
  };

  render() {
    const {
      classes,
      topLeftContent,
      topCenterContent,
      topRightContent,
      bottomLeftContent,
      bottomCenterContent,
      bottomRightContent,
      width,
      smallScreenWidth = 'xs',
    } = this.props;

    const smallScreen = isWidthDown(smallScreenWidth, width);

    return (
      <Toolbar>
        <Grid container direction="column" className={classes.wrapper} spacing={16}>
          <Grid
            container
            className={classNames(classes.row, classes.topRow)}
            justify="space-between"
            spacing={16}
          >
            <Grid item style={style.item} xs={2} sm={4} md={3} lg={2} className={classes.left}>
              {topLeftContent}
            </Grid>
            <Grid
              item
              style={style.item}
              xs={8}
              sm={4}
              md={6}
              lg={8}
              className={classNames(classes.topCenter, {
                [`${classes.centerBig}`]: !smallScreen,
              })}
            >
              {topCenterContent}
            </Grid>
            <Grid item style={style.item} xs={2} sm={4} md={3} lg={2} className={classes.right}>
              {topRightContent}
            </Grid>
          </Grid>
          <Grid
            container
            className={classNames(classes.row, classes.bottomRow)}
            justify="space-between"
            spacing={16}
          >
            <Grid item style={style.item} xs={2} sm={4} md={3} lg={2} className={classes.left}>
              {bottomLeftContent}
            </Grid>
            <Grid
              item
              style={style.item}
              xs={8}
              sm={4}
              md={6}
              lg={8}
              className={classNames(classes.bottomCenter, {
                [`${classes.centerBig}`]: !smallScreen,
              })}
            >
              {bottomCenterContent}
            </Grid>
            <Grid item style={style.item} xs={2} sm={4} md={3} lg={2} className={classes.right}>
              {bottomRightContent}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    );
  }
}

export default compose(withStyles(styles), withWidth())(TwoRowsAppBar);
