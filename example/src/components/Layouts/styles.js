// @flow
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    background: 'linear-gradient(to right, #340e4f 0%, #f91275 100%)',
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  appBar: {
    backgroundColor: '#18232B',
    color: theme.palette.getContrastText('#18232B'),
  },
  footer: {
    backgroundColor: '#F0F0F0',
    color: theme.palette.getContrastText('#F0F0F0'),
  },
  section: {
    width: '100%',
    paddingBottom: theme.spacing(4),
  },
});

export type ClassKey = $Keys<$Call<typeof styles, Theme>>;

export default styles;
