// @flow
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQueryTheme';
import type { Theme } from '@material-ui/core/styles';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

const useWidth = (defaultWidth?: Breakpoint = 'xs') => {
  const theme: Theme = useTheme();
  const breakpoints: Array<Breakpoint> = [...theme.breakpoints.keys];
  return (
    breakpoints.reverse().reduce<?Breakpoint>((output, key) => {
      const mediaQuery = theme.breakpoints.only(key);
      const matches: boolean = useMediaQuery(mediaQuery);

      return !output && matches ? key : output;
    }, null) || defaultWidth
  );
};

export default useWidth;
