// @flow
/* eslint-disable import/no-mutable-exports */
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import mediaQuery from 'css-mediaquery';

import { INITIAL_BREAKPOINT } from './constants';

/* GatsbyStarterConfig: material-ui theme */
let theme = createMuiTheme({
  props: {
    MuiWithWidth: { initialWidth: INITIAL_BREAKPOINT },
    MuiUseMediaQuery: {
      ssrMatchMedia:
        typeof window === 'undefined'
          ? (query: string) => ({
              matches: mediaQuery.match(query, {
                width: theme.breakpoints.values[INITIAL_BREAKPOINT],
              }),
            })
          : undefined,
    },
  },
});

/* GatsbyStarterConfig: responsive font sizes */
theme = responsiveFontSizes(theme, {
  breakpoints: undefined,
  disableAlign: undefined,
  factor: undefined,
  variants: undefined,
});

export default theme;
