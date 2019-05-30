// @flow
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
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

export type ClassKey = $Keys<$Call<typeof styles, Theme>>;
