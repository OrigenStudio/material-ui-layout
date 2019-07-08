// @flow
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '30%',
    maxWidth: '200px',
    height: 'auto',
    marginRight: theme.spacing(2),
  },
  textSection: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
});

export type ClassKey = $Keys<$Call<typeof styles, Theme>>;

export default styles;
