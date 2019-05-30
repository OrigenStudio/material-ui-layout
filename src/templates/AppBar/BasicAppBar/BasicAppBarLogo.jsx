// @flow
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ButtonBase from '@material-ui/core/ButtonBase';

import styles, { type ClassKey } from './styles';

export type Props = {
  classes: { [ClassKey]: string },
  title: string,
  logo: string,
  onLogoClick: Function,
};

const BasicAppBarLogo = ({
  classes,
  title,
  logo,
  onLogoClick,
}: Props): React.Node => {
  if (logo) {
    return (
      <div
        className={classes.logo}
        onClick={onLogoClick}
        onKeyPress={onLogoClick}
        role="button"
        tabIndex="0"
      >
        <img src={logo} alt={title} className={classes.image} />
      </div>
    );
  }
  return (
    <ButtonBase onClick={onLogoClick} className={classes.titleButton}>
      <Typography variant="h6" color="inherit" className={classes.flex}>
        {title}
      </Typography>
    </ButtonBase>
  );
};

export default withStyles<ClassKey, *>(styles)(BasicAppBarLogo);
