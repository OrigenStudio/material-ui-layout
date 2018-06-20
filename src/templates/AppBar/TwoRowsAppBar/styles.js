// @flow
export default (theme: Object): Object => ({
  wrapper: {
    marginTop: '0',
    marginBottom: '0',
  },
  row: theme.mixins.toolbar,
  topRow: {
    marginTop: '0',
    marginBottom: '0',
  },
  bottomRow: {
    marginTop: '0',
    marginBottom: '0',
  },
  topCenter: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCenter: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerBig: {
    justifyContent: theme.direction === 'ltr' ? 'flex-start' : 'flex-end',
  },
  right: {
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
  },
  left: {
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center',
  },
});
