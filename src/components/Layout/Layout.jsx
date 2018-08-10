// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import controllable from 'react-controllables';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

import type { Classes } from '../../types';
import styles from './styles';

import AppBar from '../AppBar';
import Footer from '../Footer';
import LayoutActions from './LayoutActions';

type Props = {
  classes: Classes,
  overrideClasses: Classes,
  children: React.Node,
  appBarPosition: string,
  appBarContent: React.Element<any>,
  appBarProps: Object,
  mainGrow: true | false,
  stickyFooter: true | false,
  footerContent: React.Element<any>,
  footerProps: Object,
  leftDrawerOpen: true | false,
  onLeftDrawerOpenChange: PropTypes.func,
  leftDrawerContent: React.Element<any>,
  leftDrawerType: string,
  leftDrawerUnder: true | false,
  leftDrawerProps: Object,
  rightDrawerOpen: true | false,
  onRightDrawerOpenChange: PropTypes.func,
  rightDrawerContent: React.Element<any>,
  rightDrawerType: string,
  rightDrawerUnder: true | false,
  rightDrawerProps: Object,
  width: Breakpoint,
  usingTwoRowAppBar: true | false,
};

// FIXME remove once material-ui drawer style is fixed
const isDocked = type => type === 'permanent' || type === 'persistent';

// TODO refactor all smallScreen logic
// TODO smallScreen logic should be named xSmallScreen logic

class Layout extends React.PureComponent<Props> {
  static defaultProps = {
    title: '',
    appBarPosition: 'fixed',
    stickyFooter: false,
    leftDrawerOpen: false,
    leftDrawerUnder: false,
    rightDrawerOpen: false,
    rightDrawerUnder: false,
    mainGrow: true,
    usingTwoRowAppBar: false,
  };

  handleLeftDrawerClose = () => {
    if (!this.props.onLeftDrawerOpenChange) return;

    this.props.onLeftDrawerOpenChange(false);
  };

  toggleLeftDrawer = () => {
    if (!this.props.onLeftDrawerOpenChange) return;

    this.props.onLeftDrawerOpenChange(!this.props.leftDrawerOpen);
  };

  handleRightDrawerClose = () => {
    if (!this.props.onRightDrawerOpenChange) return;

    this.props.onRightDrawerOpenChange(false);
  };

  toggleRightDrawer = () => {
    if (!this.props.onRightDrawerOpenChange) return;

    this.props.onRightDrawerOpenChange(!this.props.rightDrawerOpen);
  };

  render() {
    const {
      classes: defaultClasses,
      overrideClasses,
      children,
      appBarContent,
      appBarPosition,
      appBarProps,
      mainGrow,
      leftDrawerContent,
      leftDrawerOpen,
      leftDrawerType,
      leftDrawerUnder,
      leftDrawerProps,
      rightDrawerContent,
      rightDrawerOpen,
      rightDrawerType,
      rightDrawerUnder,
      rightDrawerProps,
      footerContent,
      stickyFooter,
      footerProps,
      width,
      usingTwoRowAppBar,
    } = this.props;

    // TODO change the way to overrideClasses
    // use classes instead of overrideClasses as material-ui
    const classes = { ...defaultClasses, ...overrideClasses };

    const smallScreen: boolean = isWidthDown('xs', width);
    const mainLeftShift =
      !smallScreen &&
      (leftDrawerType === 'permanent' || (leftDrawerOpen && leftDrawerType === 'persistent'));

    const mainRightShift =
      !smallScreen &&
      (rightDrawerType === 'permanent' || (rightDrawerOpen && rightDrawerType === 'persistent'));

    const mainClassnames: string = classNames(classes.main, {
      [`${classes.mainFixedAppBar}`]:
        appBarContent && appBarPosition === 'fixed' && !usingTwoRowAppBar,
      [`${classes.mainFixedTwoRowAppBar}`]:
        appBarContent && appBarPosition === 'fixed' && usingTwoRowAppBar,
      [`${classes.mainGrow}`]: mainGrow && !usingTwoRowAppBar,
      [`${classes.mainGrowTwoRowAppBar}`]: mainGrow && usingTwoRowAppBar,
      [`${classes.mainStickyFooter}`]: stickyFooter,
      [`${classes.mainShift}`]: mainLeftShift || mainRightShift,
      [`${classes.mainLeftShift}`]: mainLeftShift,
      [`${classes.mainRightShift}`]: mainRightShift,
      [`${classes.mainLeftRightShift}`]: mainLeftShift && mainRightShift,
    });

    const appBarLeftShift =
      !smallScreen &&
      (!leftDrawerUnder &&
        ((leftDrawerOpen && leftDrawerType === 'persistent') || leftDrawerType === 'permanent'));

    const appBarRightShift =
      !smallScreen &&
      (!rightDrawerUnder &&
        ((rightDrawerOpen && rightDrawerType === 'persistent') || rightDrawerType === 'permanent'));

    const appBarClassnames = classNames(classes.appBar, {
      [`${classes.appBarShift}`]: appBarLeftShift || appBarRightShift,
      [`${classes.appBarLeftShift}`]: appBarLeftShift,
      [`${classes.appBarRightShift}`]: appBarRightShift,
      [`${classes.appBarLeftRightShift}`]: appBarLeftShift && appBarRightShift,
    });

    const leftDrawerPaperClassnames = classNames(classes.drawerPaper, {
      [`${classes.drawerPaperUnder}`]: !smallScreen && leftDrawerUnder,
    });
    const rightDrawerPaperClassnames = classNames(classes.drawerPaper, {
      [`${classes.drawerPaperUnder}`]: !smallScreen && rightDrawerUnder,
      [`${classes.rightDrawerDockedFix}`]: isDocked(rightDrawerType), // FIXME remove once material-ui drawer style is fixed
    });
    const drawerHeaderClassnames = classNames({
      [`${classes.drawerHeader}`]: !usingTwoRowAppBar,
      [`${classes.drawerHeaderTwoRowAppBar}`]: usingTwoRowAppBar,
    });

    // FIXME find a better way to inject the closeDrawer prop
    const leftDrawerContentWithProps = leftDrawerContent
      ? React.cloneElement(leftDrawerContent, {
        closeDrawer: this.handleLeftDrawerClose,
        closeDrawerOnClick: smallScreen || leftDrawerType === 'temporary',
        ...leftDrawerContent.props, // This feels a bit of an antipattern, investigate
      })
      : leftDrawerContent;
    const rightDrawerContentWithProps = rightDrawerContent
      ? React.cloneElement(rightDrawerContent, {
        closeDrawer: this.handleRightDrawerClose,
        closeDrawerOnClick: smallScreen || rightDrawerType === 'temporary',
        ...rightDrawerContent.props, // This feels a bit of an antipattern, investigate
      })
      : rightDrawerContent;

    return (
      <div className={classes.layout}>
        {appBarContent ? (
          <AppBar
            position={appBarPosition}
            toggleLeftDrawer={this.toggleLeftDrawer}
            toggleRightDrawer={this.toggleRightDrawer}
            className={appBarClassnames}
            {...appBarProps}
          >
            {appBarContent}
          </AppBar>
        ) : null}
        {leftDrawerContent ? (
          <Drawer
            open={leftDrawerOpen}
            onClose={this.handleLeftDrawerClose}
            variant={!smallScreen ? leftDrawerType : 'temporary'}
            classes={{ paper: leftDrawerPaperClassnames }}
            {...leftDrawerProps}
          >
            {/* add a header to move content down if screen is not small and under the appbar */}
            {!smallScreen && leftDrawerUnder ? <div className={drawerHeaderClassnames} /> : null}
            {leftDrawerContentWithProps}
          </Drawer>
        ) : null}
        {rightDrawerContent ? (
          <Drawer
            anchor="right"
            open={rightDrawerOpen}
            onClose={this.handleRightDrawerClose}
            variant={!smallScreen ? rightDrawerType : 'temporary'}
            classes={{ paper: rightDrawerPaperClassnames }}
            {...rightDrawerProps}
          >
            {/* add a header to move content down if screen is not small and under the appbar */}
            {!smallScreen && rightDrawerUnder ? <div className={drawerHeaderClassnames} /> : null}
            {rightDrawerContentWithProps}
          </Drawer>
        ) : null}
        <LayoutActions.Provider
          value={{
            toggleLeftDrawer: this.toggleLeftDrawer,
            toggleRightDrawer: this.toggleRightDrawer,
            handleLeftDrawerClose: this.handleLeftDrawerClose,
            handleRightDrawerClose: this.handleRightDrawerClose,
          }}
        >
          <main className={mainClassnames}>{children}</main>
        </LayoutActions.Provider>
        {footerContent ? <Footer {...footerProps}>{footerContent}</Footer> : null}
      </div>
    );
  }
}

export default controllable(compose(withWidth(), withStyles(styles))(Layout), [
  'leftDrawerOpen',
  'rightDrawerOpen',
]);
