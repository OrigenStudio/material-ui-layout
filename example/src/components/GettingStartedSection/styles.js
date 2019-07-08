// @flow
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  wrapper: {
    width: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    width: 'auto',
    maxWidth: '100%',
  },
  code: {
    width: 'auto',
    maxWidth: '100%',
  },
  button: { margin: theme.spacing(1) },
  buttonIcon: { marginRight: theme.spacing(1) },
});

export type ClassKey = $Keys<$Call<typeof styles, Theme>>;

export default styles;