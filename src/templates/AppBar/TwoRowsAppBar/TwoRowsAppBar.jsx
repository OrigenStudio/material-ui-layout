import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

class TwoRowsAppBar extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    topLeftContent: PropTypes.oneOf(PropTypes.element, PropTypes.arrayOf(PropTypes.element)),
    topCenterContent: PropTypes.oneOf(PropTypes.element, PropTypes.arrayOf(PropTypes.element)),
    topRightContent: PropTypes.oneOf(PropTypes.element, PropTypes.arrayOf(PropTypes.element)),
    bottomLeftContent: PropTypes.oneOf(PropTypes.element, PropTypes.arrayOf(PropTypes.element)),
    bottomCenterContent: PropTypes.oneOf(PropTypes.element, PropTypes.arrayOf(PropTypes.element)),
    bottomRightContent: PropTypes.oneOf(PropTypes.element, PropTypes.arrayOf(PropTypes.element)),
  };

  static defaultProps = {
    classes: {},
    topLeftContent: null,
    topCenterContent: null,
    topRightContent: null,
    bottomLeftContent: null,
    bottomCenterContent: null,
    bottomRightContent: null,
  }

  render() {
    const {
      classes,
      topLeftContent,
      topCenterContent,
      topRightContent,
      bottomLeftContent,
      bottomCenterContent,
      bottomRightContent,
    } = this.props;
    return (
      <Toolbar>
        <Grid container direction="column" className={classes.wrapper}>
          <Grid container className={classes.topRow} justify={'space-between'}>
            <Grid item xs={2} className={classes.left}>
              {topLeftContent}
            </Grid>
            <Grid item xs={8} className={classes.topCenter}>
              {topCenterContent}
            </Grid>
            <Grid item xs={2} className={classes.right}>
              {topRightContent}
            </Grid>
          </Grid>
          <Grid container className={classes.bottomRow} justify={'space-between'}>
            <Grid item xs={2} className={classes.left}>
              {bottomLeftContent}
            </Grid>
            <Grid item xs={8} className={classes.bottomCenter}>
              {bottomCenterContent}
            </Grid>
            <Grid item xs={2} className={classes.right}>
              {bottomRightContent}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(TwoRowsAppBar);
