// @flow

const styles = (theme: Object): Object => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  titleButton: {
    padding: theme.spacing(1),
  },
  logo: {
    flex: 1,
    cursor: 'pointer',
    height: '45px',
    minWidth: '160px',
  },
  image: {
    height: '100%',
    margin: '0',
    padding: '0',
  },
  links: {
    float: 'right',
  },
});

export default styles;
