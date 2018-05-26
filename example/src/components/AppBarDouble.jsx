import React from 'react';
import {
  TwoRowsAppBar,
} from '../../../src';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const AppBarDouble = ({ toggleLeftDrawer, toggleRightDrawer, topLeftContent, topCenterContent, topRightContent, bottomCenterContent  }) =>(

      <TwoRowsAppBar
        topLeftContent={topLeftContent}
        topCenterContent={topCenterContent}
        topRightContent={topRightContent}
        bottomLeftContent={
          <IconButton
            onClick={toggleLeftDrawer}
            color="contrast" aria-label="Delete">
            <DeleteIcon />
        </IconButton>}
        bottomCenterContent={bottomCenterContent}
        bottomRightContent={
          <IconButton
            onClick={toggleRightDrawer}
            color="contrast" aria-label="Delete">
            <DeleteIcon />
        </IconButton>}
      />
    )
export default AppBarDouble;
