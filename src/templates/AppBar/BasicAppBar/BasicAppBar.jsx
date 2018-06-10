import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import classNames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';

import styles from './styles';

class BasicAppBar extends React.PureComponent {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({})),
    classes: PropTypes.shape({}),
    title: PropTypes.string,
    logo: PropTypes.string,
    toggleLeftDrawer: PropTypes.func,
    menuIconAlways: PropTypes.bool,
    width: PropTypes.string,
  };

  static defaultProps = {
    menuIconAlways: false,
  };

  handleIconClick = () => {
    this.props.toggleLeftDrawer();
  };

  renderLogo = () => {
    const { classes, title, logo, onLogoClick } = this.props;
    if (logo) {
      return (
        <div className={classes.logo} onClick={onLogoClick}>
          <img src={logo} alt={title} className={classes.image} />
        </div>
      );
    }
    return (
      <ButtonBase onClick={onLogoClick} className={classes.titleButton}>
        <Typography variant="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
      </ButtonBase>
    );
  };

  render() {
    const { links, menuIconAlways, width, classes } = this.props;
    return (
      <Toolbar className={classes.wrapper}>
        {menuIconAlways || isWidthDown('xs', width) ? (
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={this.handleIconClick}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        {this.renderLogo()}
        <Hidden xsDown>
          <div className={classes.links}>
            {_.map(links, link => (
              <Button
                onClick={link.onClick || null}
                href={link.href || null}
                color="inherit"
                key={link.label}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </Hidden>
      </Toolbar>
    );
  }
}

export default compose(withStyles(styles), withWidth())(BasicAppBar);
