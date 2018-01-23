import React from 'react';
import {
  BasicAppBar,
}  from '../../../src';



const AppBarSimple = ({ toggleLeftDrawer, toggleRightDrawer, title, links, logo }) => (
      <BasicAppBar
        menuIconAlways={true}
        title={title}
        logo={logo}
        links={links}
        toggleLeftDrawer={toggleLeftDrawer}
        toggleRightDrawer={toggleRightDrawer}
        />
      )

export default AppBarSimple;
