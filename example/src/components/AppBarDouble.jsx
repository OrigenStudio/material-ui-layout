// @flow

import * as React from 'react';
import TwoRowsAppBar from 'material-ui-layout/lib/templates/AppBar/TwoRowsAppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

export type Props = {
  title: string,
  toggleLeftDrawer: Function,
  toggleRightDrawer: Function,
}

const AppBarDouble = ({ title, toggleLeftDrawer, toggleRightDrawer}: Props) => (
  <TwoRowsAppBar
    topLeftContent={
      <IconButton color="inherit" onClick={toggleLeftDrawer}>
        <MenuIcon />
      </IconButton>
    }
    topCenterContent={
      <Typography variant="h6" color="inherit">
        {title}
      </Typography>
    }
    topRightContent={
      <Button color="primary" onClick={toggleRightDrawer}>
        Open Right Drawer
      </Button>
    }
    bottomLeftContent={
      <Typography variant="subtitle1" color="inherit">
        Content for the bottom left
      </Typography>
    }
    bottomCenterContent={
      <Typography variant="subtitle1" color="inherit">
        Useful for mobile apps
      </Typography>
    }
    bottomRightContent={
      <Typography variant="subtitle1" color="inherit">
        Content for the bottom right
      </Typography>
    }
  />
);
export default AppBarDouble;
