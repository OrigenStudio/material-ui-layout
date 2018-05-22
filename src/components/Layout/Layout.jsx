import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import controllable from 'react-controllables';

import styles from './styles';

import AppBar from '../AppBar';
import Footer from '../Footer';

// FIXME remove once material-ui drawer style is fixed
const isDocked = type => type === 'permanent' || type === 'persistent';

class Layout extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    overrideClasses: PropTypes.shape({}),
    children: PropTypes.element.isRequired,
    appBarPosition: PropTypes.string,
    appBarContent: PropTypes.element,
    appBarProps: PropTypes.shape({}),
    mainGrow: PropTypes.bool,
    stickyFooter: PropTypes.bool,
    footerContent: PropTypes.element,
    footerProps: PropTypes.shape({}),
    leftDrawerOpen: PropTypes.bool.isRequired,
    onLeftDrawerOpenChange: PropTypes.func,
    leftDrawerContent: PropTypes.element,
    leftDrawerType: PropTypes.string,
    leftDrawerUnder: PropTypes.bool,
    leftDrawerProps: PropTypes.shape({}),
    rightDrawerOpen: PropTypes.bool.isRequired,
    onRightDrawerOpenChange: PropTypes.func,
    rightDrawerContent: PropTypes.element,
    rightDrawerType: PropTypes.string,
    rightDrawerUnder: PropTypes.bool,
    rightDrawerProps: PropTypes.shape({}),
    width: PropTypes.string,
    usingTwoRowAppBar: PropTypes.bool,
  };

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
    // use classes insted of overrideClasses as material-ui
    const classes = { ...defaultClasses, ...overrideClasses };

    const smallScreen = isWidthDown('xs', width);

    const mainLeftShift =
      !smallScreen &&
      (leftDrawerType === 'permanent' ||
        (leftDrawerOpen && leftDrawerType === 'persistent'));

    const mainRightShift =
      !smallScreen &&
      (rightDrawerType === 'permanent' ||
        (rightDrawerOpen && rightDrawerType === 'persistent'));

    const mainClassnames = classNames(classes.main, {
      [`${classes.mainFixedAppBar}`]:
        appBarPosition === 'fixed' && !usingTwoRowAppBar,
      [`${classes.mainFixedTwoRowAppBar}`]:
        appBarPosition === 'fixed' && usingTwoRowAppBar,
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
        ((leftDrawerOpen && leftDrawerType === 'persistent') ||
          leftDrawerType === 'permanent'));

    const appBarRightShift =
      !smallScreen &&
      (!rightDrawerUnder &&
        ((rightDrawerOpen && rightDrawerType === 'persistent') ||
          rightDrawerType === 'permanent'));

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
        })
      : leftDrawerContent;
    const rightDrawerContentWithProps = rightDrawerContent
      ? React.cloneElement(rightDrawerContent, {
          closeDrawer: this.handleRightDrawerClose,
        })
      : rightDrawerContent;

    return (
      <div className={classes.layout}>
        <AppBar
          position={appBarPosition}
          toggleLeftDrawer={this.toggleLeftDrawer}
          toggleRightDrawer={this.toggleRightDrawer}
          className={appBarClassnames}
          {...appBarProps}
        >
          {appBarContent}
        </AppBar>
        {leftDrawerContent ? (
          <Drawer
            open={leftDrawerOpen}
            onClose={this.handleLeftDrawerClose}
            variant={!smallScreen ? leftDrawerType : 'temporary'}
            classes={{ paper: leftDrawerPaperClassnames }}
            {...leftDrawerProps}
          >
            {/* add a header to move content down if screen is not small and under the appbar */}
            {!smallScreen && leftDrawerUnder ? (
              <div className={drawerHeaderClassnames} />
            ) : null}
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
            {!smallScreen && rightDrawerUnder ? (
              <div className={drawerHeaderClassnames} />
            ) : null}
            {rightDrawerContentWithProps}
          </Drawer>
        ) : null}
        <main className={mainClassnames}>{children}</main>
        {footerContent ? (
          <Footer {...footerProps}>{footerContent}</Footer>
        ) : null}
      </div>
    );
  }
}

export default controllable(compose(withStyles(styles), withWidth())(Layout), [
  'leftDrawerOpen',
  'rightDrawerOpen',
]);
