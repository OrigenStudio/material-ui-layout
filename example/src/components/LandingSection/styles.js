// @flow
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  wrapper: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    maxWidth: '200px',
    height: 'auto',
  },
  section: {
    width: '100%',
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  code: {
    width: 'auto',
    maxWidth: '100%',
    marginBottom: theme.spacing(4),
  },
  githubSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  githubButton: {
    marginLeft: theme.spacing(1),
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { margin: theme.spacing(1) },
  noTextDecoration: { textTransform: 'none' },
  buttonIcon: { marginRight: theme.spacing(1) },
});

export type ClassKey = $Keys<$Call<typeof styles, Theme>>;

export default styles;