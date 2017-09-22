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
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  main: {
    paddingTop: '0px',
    display: 'flex',
  },
  mainFixedAppBar: {
    marginTop: '64px',
  },
  mainStickyFooter: {
    flex: 1,
  },
  '@media (max-width: 599px)': {
    mainFixedAppBar: {
      marginTop: '56px',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

export default styles;
