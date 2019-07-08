// @flow

import React from 'react';
import { graphql } from 'gatsby';
import GettingStartedSection from '../components/GettingStartedSection';

export type Props = {
  data: Object
};

const IndexPage = ({ data }: Props) => (
  <GettingStartedSection
    title={data.site.siteMetadata.title}
    version={data.site.siteMetadata.version}
  />
);

export default IndexPage;

export const query = graphql`
  query GettingStartedPageQuery {
    site {
      siteMetadata {
        title
        version
      }
    }
  }
`;
