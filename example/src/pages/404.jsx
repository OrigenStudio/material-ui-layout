// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import withStyles from '@material-ui/core/styles/withStyles';
import type { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PageWrapper from '../components/PageWrapper';

const styles = () => ({
  root: {},
  wrapper: {},
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
  },
  link: {},
});

type ClassKey = $Keys<$Call<typeof styles, Theme>>;

export type Props = {
  classes: { [ClassKey]: string },
};

const NotFoundPage = ({ classes }: Props) => (
  <PageWrapper
    limitWidth
    guttersH
    guttersV
    classes={{ root: classes.root, wrapper: classes.wrapper }}
  >
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
        404 - Not found
      </Typography>
      <Button
        component={Link}
        variant="outlined"
        color="primary"
        className={classes.link}
        to="/"
      >
        Take me home
      </Button>
    </div>
  </PageWrapper>
);

export default withStyles<ClassKey, *>(styles)(NotFoundPage);
