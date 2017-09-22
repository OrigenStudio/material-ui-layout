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
    drawerOpen: PropTypes.bool.isRequired,
    onDrawerOpenChange: PropTypes.func,
    drawerContent: PropTypes.element,
    appBarProps: PropTypes.shape({}),
    drawerProps: PropTypes.shape({}),
    footerProps: PropTypes.shape({}),
  };

  static defaultProps = {
    title: '',
    appBarPosition: 'fixed',
    stickyFooter: false,
    drawerOpen: false,
    drawerUnder: false,
  };

  handleDrawerClose = () => {
    if (!this.props.onDrawerOpenChange) return;

    this.props.onDrawerOpenChange(false);
  };

  toggleDrawer = () => {
    if (!this.props.onDrawerOpenChange) return;

    this.props.onDrawerOpenChange(!this.props.drawerOpen);
  };

  render() {
    const {
      classes: defaultClasses,
      overrideClasses,
      children,
      appBarContent,
      appBarPosition,
      appBarProps,
      drawerContent,
      drawerOpen,
      drawerType,
      drawerUnder,
      drawerProps,
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
      (drawerType === 'permanent' ||
        (drawerOpen && drawerType === 'persistent'));

    const mainClassnames = classNames(
      classes.main,
      { [`${classes.mainFixedAppBar}`]: appBarPosition === 'fixed' },
      { [`${classes.mainStickyFooter}`]: stickyFooter },
      { [`${classes.mainShift}`]: mainShift },
    );

    const appBarShift =
      !smallScreen &&
      (!drawerUnder &&
        ((drawerOpen && drawerType === 'persistent') ||
          drawerType === 'permanent'));

    const appBarClassnames = classNames(classes.appBar, {
      [`${classes.appBarShift}`]: appBarShift,
    });

    const drawerPaperClassnames = classNames(classes.drawerPaper, {
      [`${classes.drawerPaperUnder}`]: !smallScreen && drawerUnder,
    });

    return (
      <div className={classes.layout}>
        <AppBar
          position={appBarPosition}
          onIconClick={this.toggleDrawer}
          className={appBarClassnames}
          {...appBarProps}
        >
          {appBarContent}
        </AppBar>
        {drawerContent ? (
          <Drawer
            open={drawerOpen}
            onRequestClose={this.handleDrawerClose}
            type={!smallScreen && drawerType}
            classes={{ paper: drawerPaperClassnames }}
            {...drawerProps}
          >
            {!smallScreen && drawerUnder ? (
              <div className={classes.drawerHeader} />
            ) : null}
            {drawerContent}
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
  'drawerOpen',
]);
