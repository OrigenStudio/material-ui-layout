// @flow

import * as React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../../config/material-ui/theme';
import AppHelmet from '../components/AppHelmet';
import BasicLayout from '../components/Layouts/BasicLayout';

export type Props = {
  children: React.Node,
  location: Location,
  data: ?{
    site: ?{
      siteMetadata: ?{
        title: ?string,
      },
    },
  },
};

const Layout = ({ children, data, location, ...props }: Props) => (
  <ThemeProvider theme={theme}>
    <AppHelmet
      {...props}
      data={data}
      meta={[
        {
          name: 'keywords',
          content:
            'react, material design, layouts, material ui, web development, javascript',
        },
      ]}
    />
    {location.pathname === '/layout-controller' ? (
      children
    ) : (
      <BasicLayout
        title={data?.site?.siteMetadata?.title || 'Material UI Layout'}
      >
        {children}
      </BasicLayout>
    )}
    <CssBaseline />
  </ThemeProvider>
);

export default Layout;
