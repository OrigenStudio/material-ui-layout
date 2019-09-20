// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles, {
  type WithStyles,
} from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

import styles, { type ClassKey } from './styles';

// TODO Use gatsby methods
import MULImage from '../../images/MUL_Icon.jpg';

type Props = {
  classes: Object,
  title: string,
  subtitle: string,
  className: string,
};

const BrandingSection = ({ classes, title, subtitle, className }: Props) => (
  <div className={classNames(classes.wrapper, className)}>
    <img src={MULImage} className={classes.image} alt="library icon" />
    <div className={classes.textSection}>
      <Typography variant="h3" color="inherit">
        {title}
      </Typography>
      <Typography variant="h5" color="inherit">
        {subtitle}
      </Typography>
    </div>
  </div>
);

export default withStyles<*, *, *>(styles)(BrandingSection);
