// @flow
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import castArray from 'lodash/castArray';

export type Props = {
  title?: string,
  description?: string,
  keywords?: Array<string>,
  children?: React.Node,
};

type Data = {
  site: {
    siteMetadata: {
      siteName: string,
      title: string,
      description: string,
      author: string,
    },
  },
};

const query = graphql`
  query AppHelmetQuery {
    site {
      siteMetadata {
        siteName
        title
        description
        author
      }
    }
  }
`;

const AppHelmet = ({
  title,
  description,
  keywords,
  children,
  ...props
}: Props) => {
  const data = useStaticQuery<Data>(query);
  const title$short = title || data.site?.siteMetadata?.title || '';
  const title$long = `${title ? `${title} | ` : ''}${data.site?.siteMetadata
    ?.title || ''}`;
  return (
    <Helmet {...props}>
      <html lang="en" />
      <meta name="og:type" content="website" />
      <meta
        name="og:site_name"
        content={data.site?.siteMetadata?.siteName || title$short}
      />
      <title>{title$long}</title>
      <meta name="og:title" content={title$short} />
      {description ? <meta name="description" content={description} /> : null}
      {description ? (
        <meta name="og:description" content={description} />
      ) : null}
      {keywords && keywords.length ? (
        <meta name="keywords" content={castArray(keywords).join(',')} />
      ) : null}
      {children}
    </Helmet>
  );
};

AppHelmet.defaultProps = {
  title: undefined,
  description: undefined,
  keywords: [],
  children: null,
};

export default AppHelmet;
