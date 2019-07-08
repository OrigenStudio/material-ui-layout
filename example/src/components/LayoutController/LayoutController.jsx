// @flow

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import * as React from 'react';
import ControlSection from '../ControlSection';

type Props = {
  appBarContentType: string,
  leftDrawerType: string,
  rightDrawerType: string,
  mainGrow: Boolean,
  stickyFooter: Boolean,
  leftDrawerOpen: Boolean,
  toggleLeftDrawer: Function,
  leftDrawerUnder: Function,
  toggleLeftDrawerUnder: Function,
  rightDrawerOpen: Boolean,
  toggleRightDrawer: Function,
  rightDrawerUnder: Function,
  toggleRightDrawerUnder: Function,
  handleAppBarTypeChange: Function,
  handleLeftDrawerTypeChange: Function,
  handleRightDrawerTypeChange: Function,
  toggleMainGrow: Function,
  toggleStickyFooter: Function,
};

const LayoutController = ({
  appBarContentType,
  leftDrawerType,
  rightDrawerType,
  mainGrow,
  stickyFooter,
  handleAppBarTypeChange,
  toggleLeftDrawer,
  handleLeftDrawerTypeChange,
  leftDrawerUnder,
  toggleLeftDrawerUnder,
  toggleRightDrawer,
  handleRightDrawerTypeChange,
  rightDrawerUnder,
  toggleRightDrawerUnder,
  toggleMainGrow,
  toggleStickyFooter,
  leftDrawerOpen,
  rightDrawerOpen,
}: Props) => (
  <Grid container>
    <ControlSection sectionTitle="AppBar">
      <FormControl>
        <FormLabel>AppBar type</FormLabel>
        <RadioGroup
          row
          value={appBarContentType}
          onChange={handleAppBarTypeChange}
        >
          <FormControlLabel
            value="simple"
            control={<Radio />}
            label="Simple AppBar"
          />
          <FormControlLabel
            value="double"
            control={<Radio />}
            label="Double AppBar"
          />
        </RadioGroup>
      </FormControl>
    </ControlSection>
    <ControlSection
      sectionTitle="Left Drawer"
      topRightElement={
        <Button
          variant="contained"
          onClick={toggleLeftDrawer}
          color="secondary"
          disabled={leftDrawerType === 'permanent'}
        >
          {leftDrawerOpen ? 'Close' : 'Open'}
        </Button>
      }
    >
      <FormControl>
        <FormLabel>Drawer type</FormLabel>
        <RadioGroup
          row
          value={leftDrawerType}
          onChange={handleLeftDrawerTypeChange}
        >
          <FormControlLabel
            value="temporary"
            control={<Radio />}
            label="Temporary"
          />
          <FormControlLabel
            value="persistent"
            control={<Radio />}
            label="Persistent"
          />
          <FormControlLabel
            value="permanent"
            control={<Radio />}
            label="Permanent"
          />
        </RadioGroup>
        <FormLabel>Other settings</FormLabel>
        <FormControlLabel
          label="leftDrawerUnder"
          control={
            <Switch
              checked={leftDrawerUnder}
              onChange={toggleLeftDrawerUnder}
            />
          }
        />
      </FormControl>
    </ControlSection>
    <ControlSection
      sectionTitle="Right Drawer"
      topRightElement={
        <Button
          variant="contained"
          onClick={toggleRightDrawer}
          color="secondary"
          disabled={rightDrawerType === 'permanent'}
        >
          {rightDrawerOpen ? 'Close' : 'Open'}
        </Button>
      }
    >
      <FormControl>
        <FormLabel>Drawer type</FormLabel>
        <RadioGroup
          row
          value={rightDrawerType}
          onChange={handleRightDrawerTypeChange}
        >
          <FormControlLabel
            value="temporary"
            control={<Radio />}
            label="Temporary"
          />
          <FormControlLabel
            value="persistent"
            control={<Radio />}
            label="Persistent"
          />
          <FormControlLabel
            value="permanent"
            control={<Radio />}
            label="Permanent"
          />
        </RadioGroup>
        <FormLabel>Other settings</FormLabel>
        <FormControlLabel
          label="rightDrawerUnder"
          control={
            <Switch
              checked={rightDrawerUnder}
              onChange={toggleRightDrawerUnder}
            />
          }
        />
      </FormControl>
    </ControlSection>
    <ControlSection sectionTitle="Layout Properties">
      <FormGroup row>
        <FormControlLabel
          label="mainGrow"
          control={<Switch checked={mainGrow} onChange={toggleMainGrow} />}
        />
        <FormControlLabel
          label="stickyFooter"
          control={
            <Switch checked={stickyFooter} onChange={toggleStickyFooter} />
          }
        />
      </FormGroup>
    </ControlSection>
  </Grid>
);

export default LayoutController;
