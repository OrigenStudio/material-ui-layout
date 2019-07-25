// @flow

import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import classnames from 'classnames';
import Drawer from '@material-ui/core/Drawer';

import styles from './styles';
import useIsBreakpointDown from '../../hooks/useIsBreakpointDown';
import Footer from '../Footer';
import AppBar from '../AppBar';
import LayoutActions from './LayoutActions';

type ClassKey = $Keys<$Call<typeof styles, any>>;

type Props = {
  title: string,
  classes: { [ClassKey]: string },
  children: React.Node,
  appBarPosition: string,
  appBarContent: React.Element<any>,
  appBarProps: Object,
  mainGrow: true | false,
  stickyFooter: true | false,
  footerContent: React.Element<any>,
  footerProps: Object,
  leftDrawerContent: React.Element<any>,
  leftDrawerType: string,
  leftDrawerUnder: true | false,
  leftDrawerProps: Object,
  rightDrawerContent: React.Element<any>,
  rightDrawerType: string,
  rightDrawerUnder: true | false,
  rightDrawerProps: Object,
  usingTwoRowAppBar: true | false,
  breakpoint: Breakpoint,
};

// FIXME remove once material-ui drawer style is fixed
const isDocked = type => type === 'permanent' || type === 'persistent';

// TODO refactor all smallScreen logic
// TODO smallScreen logic should be named xSmallScreen logic

const Layout = ({
  classes,
  children,
  appBarContent,
  appBarPosition,
  appBarProps,
  mainGrow,
  leftDrawerContent,
  leftDrawerType,
  leftDrawerUnder,
  leftDrawerProps,
  rightDrawerContent,
  rightDrawerType,
  rightDrawerUnder,
  rightDrawerProps,
  footerContent,
  stickyFooter,
  footerProps,
  usingTwoRowAppBar,
  breakpoint,
}: Props) => {
  const smallScreen = useIsBreakpointDown(breakpoint);

  const [leftDrawerOpen, setLeftDrawerOpen] = React.useState<boolean>(false);
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState<boolean>(false);

  const handleLeftDrawerClose = React.useCallback(() => {
    if (!setLeftDrawerOpen) return;
    setLeftDrawerOpen(false);
  }, [setLeftDrawerOpen]);

  const toggleLeftDrawer = React.useCallback(() => {
    if (!setLeftDrawerOpen) return;
    setLeftDrawerOpen(!leftDrawerOpen);
  }, [leftDrawerOpen, setLeftDrawerOpen]);

  const handleRightDrawerClose = React.useCallback(() => {
    if (!setRightDrawerOpen) return;
    setRightDrawerOpen(false);
  }, [setRightDrawerOpen]);

  const toggleRightDrawer = React.useCallback(() => {
    if (!setRightDrawerOpen) return;
    setRightDrawerOpen(!rightDrawerOpen);
  }, [setRightDrawerOpen, rightDrawerOpen]);

  const layoutActions = React.useMemo(
    () => ({
      handleLeftDrawerClose,
      toggleLeftDrawer,
      handleRightDrawerClose,
      toggleRightDrawer,
    }),
    [
      handleLeftDrawerClose,
      toggleLeftDrawer,
      handleRightDrawerClose,
      toggleRightDrawer,
    ]
  );

  const mainLeftShift =
    !smallScreen &&
    (leftDrawerType === 'permanent' ||
      (leftDrawerOpen && leftDrawerType === 'persistent'));

  const mainRightShift =
    !smallScreen &&
    (rightDrawerType === 'permanent' ||
      (rightDrawerOpen && rightDrawerType === 'persistent'));

  const mainClassnames = classnames(classes.main, {
    [`${classes.mainFixedAppBar}`]:
      appBarContent && appBarPosition === 'fixed' && !usingTwoRowAppBar,
    [`${classes.mainFixedTwoRowAppBar}`]:
      appBarContent && appBarPosition === 'fixed' && usingTwoRowAppBar,
    [`${classes.mainGrow}`]: mainGrow && !usingTwoRowAppBar,
    [`${classes.mainGrowTwoRowAppBar}`]: mainGrow && usingTwoRowAppBar,
    [`${classes.mainStickyFooter}`]: stickyFooter,
    [`${classes.mainShift}`]: mainLeftShift || mainRightShift,
    [`${classes.mainLeftShift}`]: mainLeftShift,
    [`${classes.mainRightShift}`]: mainRightShift,
    [`${classes.mainLeftRightShift}`]: mainLeftShift && mainRightShift,
  });

  const footerClassnames = classnames(
    classes.footer,
    footerProps ? footerProps.className : ''
  );

  const appBarLeftShift =
    !smallScreen &&
    (!leftDrawerUnder &&
      ((leftDrawerOpen && leftDrawerType === 'persistent') ||
        leftDrawerType === 'permanent'));

  const appBarRightShift =
    !smallScreen &&
    (!rightDrawerUnder &&
      ((rightDrawerOpen && rightDrawerType === 'persistent') ||
        rightDrawerType === 'permanent'));

  const appBarClassnames = classnames(classes.appBar, {
    [`${classes.appBarShift}`]: appBarLeftShift || appBarRightShift,
    [`${classes.appBarLeftShift}`]: appBarLeftShift,
    [`${classes.appBarRightShift}`]: appBarRightShift,
    [`${classes.appBarLeftRightShift}`]: appBarLeftShift && appBarRightShift,
  });

  const leftDrawerPaperClassnames = classnames(classes.drawerPaper, {
    [`${classes.drawerPaperUnder}`]: !smallScreen && leftDrawerUnder,
  });
  const rightDrawerPaperClassnames = classnames(classes.drawerPaper, {
    [`${classes.drawerPaperUnder}`]: !smallScreen && rightDrawerUnder,
    [`${classes.rightDrawerDockedFix}`]: isDocked(rightDrawerType), // FIXME remove once material-ui drawer style is fixed
  });
  const drawerHeaderClassnames = classnames({
    [`${classes.drawerHeader}`]: !usingTwoRowAppBar,
    [`${classes.drawerHeaderTwoRowAppBar}`]: usingTwoRowAppBar,
  });

  // FIXME find a better way to inject the closeDrawer prop
  const leftDrawerContentWithProps = leftDrawerContent
    ? React.cloneElement(leftDrawerContent, {
        closeDrawer: handleLeftDrawerClose,
        closeDrawerOnClick: smallScreen || leftDrawerType === 'temporary',
        ...leftDrawerContent.props, // This feels a bit of an antipattern, investigate
      })
    : leftDrawerContent;
  const rightDrawerContentWithProps = rightDrawerContent
    ? React.cloneElement(rightDrawerContent, {
        closeDrawer: handleRightDrawerClose,
        closeDrawerOnClick: smallScreen || rightDrawerType === 'temporary',
        ...rightDrawerContent.props, // This feels a bit of an antipattern, investigate
      })
    : rightDrawerContent;

  return (
    <LayoutActions.Provider value={layoutActions}>
      <div className={classes.layout}>
        {appBarContent ? (
          <AppBar
            position={appBarPosition}
            toggleLeftDrawer={toggleLeftDrawer}
            toggleRightDrawer={toggleRightDrawer}
            className={appBarClassnames}
            {...appBarProps}
          >
            {appBarContent}
          </AppBar>
        ) : null}
        {leftDrawerContentWithProps ? (
          <Drawer
            open={leftDrawerOpen}
            onClose={handleLeftDrawerClose}
            variant={!smallScreen ? leftDrawerType : 'temporary'}
            classes={{ paper: leftDrawerPaperClassnames }}
            {...leftDrawerProps}
          >
            {/* add a header to move content down if screen is not small and under the appbar */}
            {!smallScreen && leftDrawerUnder ? (
              <div className={drawerHeaderClassnames} />
            ) : null}
            {leftDrawerContentWithProps}
          </Drawer>
        ) : null}
        {rightDrawerContentWithProps ? (
          <Drawer
            anchor="right"
            open={rightDrawerOpen}
            onClose={handleRightDrawerClose}
            variant={!smallScreen ? rightDrawerType : 'temporary'}
            classes={{ paper: rightDrawerPaperClassnames }}
            {...rightDrawerProps}
          >
            {/* add a header to move content down if screen is not small and under the appbar */}
            {!smallScreen && rightDrawerUnder ? (
              <div className={drawerHeaderClassnames} />
            ) : null}
            {rightDrawerContentWithProps}
          </Drawer>
        ) : null}
        <main className={mainClassnames}>{children}</main>
        {footerContent ? (
          <Footer {...footerProps} className={footerClassnames}>
            {footerContent}
          </Footer>
        ) : null}
      </div>
    </LayoutActions.Provider>
  );
};

Layout.defaultProps = {
  title: '',
  appBarPosition: 'fixed',
  stickyFooter: false,
  leftDrawerOpen: false,
  leftDrawerUnder: false,
  rightDrawerOpen: false,
  rightDrawerUnder: false,
  mainGrow: true,
  usingTwoRowAppBar: false,
};

export default withStyles<ClassKey, *>(styles)(React.memo<Props>(Layout));
