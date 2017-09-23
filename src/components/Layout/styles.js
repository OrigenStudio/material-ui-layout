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
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainFixedAppBar: {
    marginTop: 56,
  },
  [theme.breakpoints.up('sm')]: {
    mainFixedAppBar: {
      marginTop: 64,
    },
  },
  mainStickyFooter: {
    flex: 1,
  },
  mainShift: {
    transition: theme.transitions.create(['margin'], {
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
  drawerHeader: theme.mixins.toolbar,
  rightDrawerDockedFix: {
    borderLeft: `1px solid ${theme.palette.text.divider}`,
    borderRight: 'none',
  },
});

export default styles;
