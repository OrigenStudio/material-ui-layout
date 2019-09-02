// @flow

import React from 'react';

const LayoutActions = React.createContext<*>({
  toggleLeftDrawer: () => {},
  toggleRightDrawer: () => {},
  handleRightDrawerClose: () => {},
  handleLeftDrawerClose: () => {},
});

export default LayoutActions;
