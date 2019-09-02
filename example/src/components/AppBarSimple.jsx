// @flow

import React from 'react';
import BasicAppBar from 'material-ui-layout/lib/templates/AppBar/BasicAppBar';

export type Props = {
  toggleLeftDrawer?: Function,
  toggleRightDrawer?: Function,
  title: string,
  links?: Array<Object>,
  logo?: string,
  onLogoClick?: Function,
  menuIconAlways?: true | false,
};

const AppBarSimple = ({
  toggleLeftDrawer,
  toggleRightDrawer,
  title,
  links,
  logo,
  menuIconAlways,
  onLogoClick,
}: Props) => (
  <BasicAppBar
    onLogoClick={onLogoClick}
    menuIconAlways={menuIconAlways}
    title={title}
    logo={logo}
    links={links}
    toggleLeftDrawer={toggleLeftDrawer}
    toggleRightDrawer={toggleRightDrawer}
  />
);

AppBarSimple.defaultProps = {
  toggleLeftDrawer: undefined,
  toggleRightDrawer: undefined,
  links: undefined,
  logo: undefined,
  onLogoClick: undefined,
  menuIconAlways: undefined,
};

export default AppBarSimple;
