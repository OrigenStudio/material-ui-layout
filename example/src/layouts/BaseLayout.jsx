// @flow
import * as React from 'react';
import MaterialUILayout from 'material-ui-layout';
import BasicAppBar from 'material-ui-layout/lib/templates/AppBar/BasicAppBar';
import BasicFooter from 'material-ui-layout/lib/templates/Footer/BasicFooter';
import BasicDrawer from 'material-ui-layout/lib/templates/Drawer/BasicDrawer';

export type Props = {
  children: React.Node,
};

const BaseLayout = ({ children }: Props) => (
  <MaterialUILayout
    mainGrow={false}
    stickyFooter
    appBarContent={<BasicAppBar title="Origen Studio" />}
    footerContent={<BasicFooter title="Origen Studio" />}
    drawerContent={<BasicDrawer />}
  >
    {children}
  </MaterialUILayout>
);

export default BaseLayout;
