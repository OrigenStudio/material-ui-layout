// @flow

import * as React from 'react';
import BasicDrawer from 'material-ui-layout/lib/templates/Drawer/BasicDrawer';
import Layout from 'material-ui-layout';
import { withStyles } from '@material-ui/core/styles';
import { navigate } from 'gatsby-link';

import AppBarSimple from '../AppBarSimple';
import Footer from '../Footer';
import links from '../../data/links';
import styles, { type ClassKey } from './styles';

type Props = {
  classes: Object,
  title: string,
  children: React.Node,
};

const BasicLayout = ({ classes, title, children }: Props) => (
  <Layout
    appBarContent={
      <AppBarSimple
        title={title}
        links={links}
        menuIconAlways={false}
        onLogoClick={() => {
          navigate('/');
        }}
      />
    }
    appBarProps={{
      color: 'inherit',
      className: classes.appBar,
    }}
    leftDrawerContent={<BasicDrawer links={links} />}
    footerContent={<Footer />}
    footerProps={{ color: 'inherit', className: classes.footer }}
    stickyFooter
    mainGrow={false}
  >
    <div className={classes.wrapper}>{children}</div>
  </Layout>
);

export default withStyles<ClassKey, *>(styles)(BasicLayout);
