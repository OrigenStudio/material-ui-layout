// @flow

import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQueryTheme';
import type { Theme } from '@material-ui/core/styles';

import BasicAppBarLogo from './BasicAppBarLogo';
import styles, { type ClassKey } from './styles';

export type Link = {
  label: string,
  href?: string,
  onClick?: Function,
};

export type Props = {
  links: Array<Link>,
  classes: { [ClassKey]: string },
  title: string,
  logo: string,
  toggleLeftDrawer: Function,
  menuIconAlways: true | false,
  onLogoClick: Function,
};

const BasicAppBar = ({
  links,
  menuIconAlways,
  classes,
  toggleLeftDrawer,
  title,
  logo,
  onLogoClick,
}: Props): React.Node => {
  const theme: Theme = useTheme();
  const smallScreen: boolean = useMediaQuery(theme.breakpoints.down('xs'));

  const handleIconClick = React.useCallback(() => {
    toggleLeftDrawer();
  }, [toggleLeftDrawer]);

  return (
    <Toolbar className={classes.wrapper}>
      {menuIconAlways || smallScreen ? (
        <IconButton color="inherit" aria-label="Menu" onClick={handleIconClick}>
          <MenuIcon />
        </IconButton>
      ) : null}
      <BasicAppBarLogo
        classes={classes}
        title={title}
        logo={logo}
        onLogoClick={onLogoClick}
      />
      <Hidden xsDown>
        <div className={classes.links}>
          {links.map(link => (
            <Button
              key={link.label}
              onClick={link.onClick || null}
              href={link.href || undefined}
              color="inherit"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </Hidden>
    </Toolbar>
  );
};

BasicAppBar.defaultProps = {
  menuIconAlways: false,
};

export default withStyles<ClassKey, *>(styles)(BasicAppBar);
