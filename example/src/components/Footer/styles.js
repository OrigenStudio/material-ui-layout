// @flow
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  text: {
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },
});

export type ClassKey = $Keys<$Call<typeof styles, Theme>>;

export default styles;
