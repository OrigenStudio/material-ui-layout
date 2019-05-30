// @flow
import * as React from 'react';
import type { HOC } from 'recompose';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQueryTheme';

export type EnhancedProps<E: {}> = {
  ...$Exact<E>,
  smallScreenWidth: Breakpoint,
};

export type WithIsSmallScreenHOC<E: {}> = HOC<
  { ...$Exact<E>, smallScreen: boolean },
  EnhancedProps<E>
>;

export default function withIsSmallScreen<
  Enhanced: {}
>(): WithIsSmallScreenHOC<Enhanced> {
  return Component => {
    const WithIsSmallScreen = ({
      smallScreenWidth = 'xs',
      ...props
    }: EnhancedProps<Enhanced>) => (
      <Component
        {...props}
        smallScreen={useMediaQuery(
          useTheme().breakpoints.down(smallScreenWidth)
        )}
      />
    );
    return WithIsSmallScreen;
  };
}
