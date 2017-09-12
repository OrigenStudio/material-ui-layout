const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  main: {
    paddingTop: '0px',
    display: 'flex',
  },
  mainFixedNavbar: {
    marginTop: '64px',
  },
  mainStickyFooter: {
    flex: 1,
  },
  '@media (max-width: 599px)': {
    mainFixedNavbar: {
      marginTop: '56px',
    },
  },
};

export default styles;
