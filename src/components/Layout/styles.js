// TODO curry drawerWidth?
const drawerWidth = 240;

const styles = theme => ({
  layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarLeftShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarRightShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarLeftRightShift: {
    marginLeft: drawerWidth,
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth * 2}px)`,
  },
  main: {
    paddingTop: '0px',
    display: 'flex',
    width: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainFixedAppBar: {
    marginTop: `${theme.mixins.toolbar.minHeight}px`,
  },
  mainFixedTwoRowAppBar: {
    marginTop: `${theme.mixins.toolbar.minHeight * 2}px`,
  },
  mainGrow: {
    flex: 1,
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  },
  mainGrowTwoRowAppBar: {
    flex: 1,
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight * 2}px)`,
  },
  drawerHeader: theme.mixins.toolbar,
  drawerHeaderTwoRowAppBar: {
    minHeight: `${theme.mixins.toolbar.minHeight * 2}px`,
  },
  [theme.breakpoints.up('sm')]: {
    mainFixedAppBar: {
      marginTop: `${
        theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight
      }px`,
    },
    mainFixedTwoRowAppBar: {
      marginTop: `${theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight *
        2}px`,
    },
    mainGrow: {
      height: `calc(100vh - ${
        theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight
      }px)`,
    },
    mainGrowTwoRowAppBar: {
      height: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('sm')]
        .minHeight * 2}px)`,
    },
    drawerHeaderTwoRowAppBar: {
      minHeight: `${theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight *
        2}px`,
    },
  },
  mainStickyFooter: {
    flex: 1,
  },
  mainShift: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  mainLeftShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  mainRightShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  mainLeftRightShift: {
    marginRight: drawerWidth,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth * 2}px)`,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerPaperUnder: {
    zIndex: '1000',
  },
});

export default styles;
