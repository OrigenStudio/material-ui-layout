const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.appBar,
    color: theme.palette.getContrastText(theme.palette.background.appBar),
    padding: '20px 10px',
  },
  message: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  logoImage: {
    maxHeight: '50px',
    maxWidth: '300px',
    margin: '0',
    padding: '0',
  },
});

export default styles;
