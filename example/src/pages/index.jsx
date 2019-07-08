// @flow
import * as React from 'react';
import { graphql } from 'gatsby';
import withStyles from '@material-ui/core/styles/withStyles';
import type { Theme } from '@material-ui/core/styles';

import PageWrapper from '../components/PageWrapper';
import LandingSection from '../components/LandingSection/index';

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
  data: {
    site: {
      siteMetadata: {
        title: string,
        version: string,
      },
    },
  },
};

const HomePage = ({ classes, data }: Props) => {
  return (
    <PageWrapper
      limitWidth
      guttersH
      guttersV
      classes={{ root: classes.root, wrapper: classes.wrapper }}
    >
      <LandingSection
        title={data.site.siteMetadata.title}
        version={data.site.siteMetadata.version}
      />
    </PageWrapper>
  );
};

export default withStyles<ClassKey, *>(styles)(HomePage);

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        version
      }
    }
  }
`;
