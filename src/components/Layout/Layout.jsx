import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import compose from 'recompose/compose';
import withWidth, { isWidthDown } from 'material-ui/utils/withWidth';
import controllable from 'react-controllables';

import styles from './styles';

import AppBar from '../AppBar';
import Footer from '../Footer';

// TODO create Layout Library

class Layout extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    overrideClasses: PropTypes.shape({}),
    children: PropTypes.element.isRequired,
    appBarPosition: PropTypes.string,
    stickyFooter: PropTypes.bool,
    footerContent: PropTypes.element,
    appBarContent: PropTypes.element,
    leftDrawerOpen: PropTypes.bool.isRequired,
    onLeftDrawerOpenChange: PropTypes.func,
    leftDrawerContent: PropTypes.element,
    leftDrawerType: PropTypes.string,
    leftDrawerUnder: PropTypes.bool,
    appBarProps: PropTypes.shape({}),
    leftDrawerProps: PropTypes.shape({}),
    footerProps: PropTypes.shape({}),
    width: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    appBarPosition: 'fixed',
    stickyFooter: false,
    leftDrawerOpen: false,
    leftDrawerUnder: false,
  };

  handleLeftDrawerClose = () => {
    if (!this.props.onLeftDrawerOpenChange) return;

    this.props.onLeftDrawerOpenChange(false);
  };

  toggleLeftDrawer = () => {
    if (!this.props.onLeftDrawerOpenChange) return;

    this.props.onLeftDrawerOpenChange(!this.props.leftDrawerOpen);
  };

  render() {
    const {
      classes: defaultClasses,
      overrideClasses,
      children,
      appBarContent,
      appBarPosition,
      appBarProps,
      leftDrawerContent,
      leftDrawerOpen,
      leftDrawerType,
      leftDrawerUnder,
      leftDrawerProps,
      footerContent,
      stickyFooter,
      footerProps,
      width,
    } = this.props;

    // TODO change the way to overrideClasses
    // use classes insted of overrideClasses as material-ui
    const classes = { ...defaultClasses, ...overrideClasses };

    const smallScreen = isWidthDown('xs', width);

    const mainShift =
      !smallScreen &&
      (leftDrawerType === 'permanent' ||
        (leftDrawerOpen && leftDrawerType === 'persistent'));

    const mainClassnames = classNames(
      classes.main,
      { [`${classes.mainFixedAppBar}`]: appBarPosition === 'fixed' },
      { [`${classes.mainStickyFooter}`]: stickyFooter },
      { [`${classes.mainShift}`]: mainShift },
    );

    const appBarShift =
      !smallScreen &&
      (!leftDrawerUnder &&
        ((leftDrawerOpen && leftDrawerType === 'persistent') ||
          leftDrawerType === 'permanent'));

    const appBarClassnames = classNames(classes.appBar, {
      [`${classes.appBarShift}`]: appBarShift,
    });

    const drawerPaperClassnames = classNames(classes.drawerPaper, {
      [`${classes.drawerPaperUnder}`]: !smallScreen && leftDrawerUnder,
    });

    return (
      <div className={classes.layout}>
        <AppBar
          position={appBarPosition}
          onIconClick={this.toggleLeftDrawer}
          className={appBarClassnames}
          {...appBarProps}
        >
          {appBarContent}
        </AppBar>
        {leftDrawerContent ? (
          <Drawer
            open={leftDrawerOpen}
            onRequestClose={this.handleLeftDrawerClose}
            type={!smallScreen && leftDrawerType}
            classes={{ paper: drawerPaperClassnames }}
            {...leftDrawerProps}
          >
            {!smallScreen && leftDrawerUnder ? (
              <div className={classes.drawerHeader} />
            ) : null}
            {leftDrawerContent}
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
]);
