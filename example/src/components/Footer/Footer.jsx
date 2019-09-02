/* eslint-disable jsx-a11y/accessible-emoji */
// @flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles, { type ClassKey } from './styles';

type Props = {
  classes: Object,
};

const Footer = ({ classes }: Props) => (
  <Grid
    container
    alignItems="flex-end"
    justify="space-around"
    spacing={2}
    className={classes.wrapper}
  >
    <Grid item xs={12} md={4} className={classes.text}>
      <Typography variant="h6" color="inherit" gutterBottom>
        Easy Layouts
      </Typography>
      <Typography variant="subtitle1" color="inherit">
        Made with ❤️ by 
        {' '}
        <a href="https://origen.studio">Origen Studio</a>
      </Typography>
    </Grid>
  </Grid>
);

export default withStyles<ClassKey, *>(styles)(Footer);
