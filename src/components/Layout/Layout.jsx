import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
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
    appBarPosition: 'default',
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
    } = this.props;

    // TODO change the way to overrideClasses
    // use classes insted of overrideClasses as material-ui
    const classes = { ...defaultClasses, ...overrideClasses };

    const mainClassnames = classNames(
      classes.main,
      { [`${classes.mainFixedAppBar}`]: appBarPosition === 'fixed' },
      { [`${classes.mainStickyFooter}`]: stickyFooter },
    );

    const appBarShift =
      drawerOpen && !drawerUnder && (drawerType === 'permanent' || drawerType === 'persistent');
    console.log('appBarShift', appBarShift);

    const appBarClassnames = classNames(classes.appBar, {
      [`${classes.appBarShift}`]: appBarShift,
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
            type={drawerType}
            classes={{ paper: classes.drawerPaper }}
            {...drawerProps}
          >
            {drawerContent}
          </Drawer>
        ) : null}
        <main className={mainClassnames}>{children}</main>
        {footerContent ? <Footer {...footerProps}>{footerContent}</Footer> : null}
      </div>
    );
  }
}

export default controllable(withStyles(styles)(Layout), ['drawerOpen']);
