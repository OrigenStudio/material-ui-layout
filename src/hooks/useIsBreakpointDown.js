// @flow
import useTheme from '@material-ui/core/styles/useTheme';
import type { Theme } from '@material-ui/core/styles/createMuiTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQueryTheme';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export default function useIsDown(breakpoint: Breakpoint): boolean {
  return useMediaQuery(useTheme<Theme>().breakpoints.down(breakpoint));
}
