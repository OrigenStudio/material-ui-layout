// @flow
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  wrapper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
});

export type ClassKey = $Keys<$Call<typeof styles, Theme>>;

export default styles;