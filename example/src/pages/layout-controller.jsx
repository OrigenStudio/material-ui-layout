// @flow

import React from 'react';
import { graphql } from 'gatsby';
import useTheme from '@material-ui/core/styles/useTheme';

import LayoutExample from '../components/Layouts/LayoutExample';

export type Props = {
  data: Object,
};

const LayoutControllerPage = ({ data }: Props) =>
  console.log(useTheme()) || (
    <LayoutExample
      title={data.site.siteMetadata.title}
      version={data.site.siteMetadata.version}
    />
  );

export default LayoutControllerPage;

export const query = graphql`
  query LayoutControllerQuery {
    site {
      siteMetadata {
        title
        version
      }
    }
  }
`;
