// @flow

import * as React from 'react';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import type { Theme } from '@material-ui/core/styles';

export const curryLimitWidthClasses = (name: string = 'limitWidth') => (
  theme: Theme,
) => ({
  [name]: {
    maxWidth: '90vw',
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    [name]: {
      maxWidth: '90vw',
      width: '100%',
    },
  },
  [theme.breakpoints.up('md')]: {
    [name]: {
      maxWidth: '90vw',
      width: '100%',
    },
  },
  [theme.breakpoints.up('lg')]: {
    [name]: {
      maxWidth: '85vw',
      width: '100%',
    },
  },
  [theme.breakpoints.up('xl')]: {
    [name]: {
      maxWidth: '70vw',
      width: '100%',
    },
  },
});

export const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flex: '1',
    position: 'relative',
  },
  wrapper: {},
  ...curryLimitWidthClasses()(theme),
  page: {
    width: '100%',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  guttersH: theme.mixins.gutters(),
  guttersV: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
});

type ClassKey = $Keys<$Call<typeof styles, Theme>> | 'limitWidth';

export type Props = {
  limitWidth?: boolean,
  guttersH?: boolean,
  guttersV?: boolean,
  children: React.Node,
  classes: { [ClassKey]: string },
};

const PageWrapper = ({
  classes,
  limitWidth,
  guttersH,
  guttersV,
  children,
}: Props): React.Node => (
  <div
    className={classnames(classes.page, classes.root, {
      [classes.justifyContentCenter]: limitWidth,
    })}
  >
    <div
      className={classnames(classes.wrapper, {
        [classes.page]: !limitWidth,
        [classes.limitWidth]: limitWidth,
        [classes.guttersH]: guttersH,
        [classes.guttersV]: guttersV,
      })}
    >
      {children}
    </div>
  </div>
);

PageWrapper.defaultProps = {
  limitWidth: false,
  guttersH: false,
  guttersV: false,
};

export default withStyles<ClassKey, *, *>(styles)(PageWrapper);
