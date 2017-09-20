import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import controllable from 'react-controllables';

import styles from './styles';

import NavBar from '../NavBar';
import Footer from '../Footer';

// TODO create Layout Library

class Layout extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    children: PropTypes.element.isRequired,
    navbarPostion: PropTypes.string,
    stickyFooter: PropTypes.bool,
    footerContent: PropTypes.element,
    navBarContent: PropTypes.element,
    drawerOpen: PropTypes.bool.isRequired,
    onDrawerOpenChange: PropTypes.func,
    drawerContent: PropTypes.element,
    navBarProps: PropTypes.shape({}),
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
      classes,
      children,
      navbarPostion,
      stickyFooter,
      footerContent,
      navBarContent,
      drawerContent,
      drawerOpen,
      navBarProps,
      drawerProps,
      footerProps,
    } = this.props;

    const mainClassnames = classNames(
      classes.main,
      { [`${classes.mainFixedNavbar}`]: navbarPostion === 'fixed' },
      { [`${classes.mainStickyFooter}`]: stickyFooter },
    );

    return (
      <div className={classes.layout}>
        <NavBar {...navBarProps} onIconClick={this.toggleDrawer}>
          {navBarContent}
        </NavBar>
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
