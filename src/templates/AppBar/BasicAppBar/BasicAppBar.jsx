import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import Hidden from 'material-ui/Hidden';
import { withStyles } from 'material-ui/styles';
import withWidth, { isWidthDown } from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';

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
    const { classes, title, logo } = this.props;
    if (logo) {
      return (
        <div className={classes.logo}>
          <img src={logo} alt={title} className={classes.image} />
        </div>
      );
    }
    return (
      <Typography type="title" color="inherit" className={classes.flex}>
        {title}
      </Typography>
    );
  };

  render() {
    const { links, menuIconAlways, width } = this.props;
    return (
      <Toolbar>
        {menuIconAlways || isWidthDown('xs', width, true) ? (
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
          <div>
            {_.map(links, link => (
              <Button href={link.href} color="inherit" key={link.label}>
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
