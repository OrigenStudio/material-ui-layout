// @flow

import * as React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../../config/material-ui/theme';
import AppHelmet from '../components/AppHelmet';
import BaseLayout from './BaseLayout';

export type Props = {
  children: React.Node,
};

const Layout = ({ children, ...props }: Props) => (
    <ThemeProvider theme={theme}>
      <AppHelmet {...props} />
      <BaseLayout>{children}</BaseLayout>
      <CssBaseline />
    </ThemeProvider>
);

export default Layout;
