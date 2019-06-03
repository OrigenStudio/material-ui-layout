// @flow
import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import type { Theme } from '@material-ui/core/styles';

import PageWrapper from '../components/PageWrapper';

const styles = (unusedTheme: Theme) => ({
  root: {},
  wrapper: {},
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 'auto',
  },
  link: {},
});

export type ClassKey = $Keys<$Call<typeof styles, Theme>>;

export type Props = {
  classes: { [ClassKey]: string },
};

const HomePage = ({ classes }: Props) => {
  return (
    <PageWrapper
      limitWidth
      guttersH
      guttersV
      classes={{ root: classes.root, wrapper: classes.wrapper }}
    >
      TODO
    </PageWrapper>
  );
};

export default withStyles<ClassKey, *>(styles)(HomePage);
