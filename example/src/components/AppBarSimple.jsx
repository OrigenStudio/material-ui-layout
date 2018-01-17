import React from 'react';
import {
  BasicAppBar,
} from 'material-ui-layout';



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
