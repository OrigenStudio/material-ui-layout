import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles';

class BasicFooter extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    smallMessage: PropTypes.string,
    bigMessage: PropTypes.string,
    classes: PropTypes.shape({}),
    logo: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({})),
  };
  static defaultProps = {
    title: 'Brand',
  };

  renderLogo = () => {
    const { classes, title, logo } = this.props;
    if (logo) {
      return <img src={logo} alt={title} className={classes.logoImage} />;
    }
    return (
      <Typography variant="title" color="inherit" className={classes.flex}>
        {title}
      </Typography>
    );
  };

  render() {
    const {
      title, classes, smallMessage, bigMessage, links,
    } = this.props;
    return (
      <Grid container alignItems="flex-end" justify="space-around" spacing={16}>
        <Grid item xs={12}>
          <div className={classes.message}>
            <Typography variant="display3" color="inherit">
              {bigMessage}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container direction="row" spacing={0} justify="center">
            {_.map(links, link => (
              <Button href={link.href} color="inherit" key={link.label}>
                {link.label}
              </Button>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container direction="column" alignItems="center" spacing={0}>
            <Typography variant="body1" color="inherit">
              {smallMessage}
            </Typography>
            <Typography variant="caption" color="inherit">
              {title} © {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container justify="center">
            {this.renderLogo()}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BasicFooter);
