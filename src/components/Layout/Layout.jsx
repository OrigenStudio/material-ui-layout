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
    navbarPostion: PropTypes.string,
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
    navbarPostion: 'default',
    stickyFooter: false,
    drawerOpen: false,
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
      navbarPostion,
      stickyFooter,
      footerContent,
      appBarContent,
      drawerContent,
      drawerOpen,
      appBarProps,
      drawerProps,
      footerProps,
    } = this.props;

    const classes = { ...defaultClasses, ...overrideClasses };

    const mainClassnames = classNames(
      classes.main,
      { [`${classes.mainFixedNavbar}`]: navbarPostion === 'fixed' },
      { [`${classes.mainStickyFooter}`]: stickyFooter },
    );

    return (
      <div className={classes.layout}>
        <AppBar {...appBarProps} onIconClick={this.toggleDrawer}>
          {appBarContent}
        </AppBar>
        {drawerContent ? (
          <Drawer {...drawerProps} open={drawerOpen} onRequestClose={this.handleDrawerClose}>
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
