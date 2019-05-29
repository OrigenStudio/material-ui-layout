// @flow
import * as React from 'react';
import type { HOC } from 'recompose';
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

import useWidth from './useWidth';

export type WithWidthHOC<E: {}> = HOC<{ ...$Exact<E>, width: Breakpoint }, E>;

export default function withWidth<Enhanced: {}>(): WithWidthHOC<Enhanced> {
  return Component => {
    const WithWidth = (props: Enhanced) => (
      <Component {...props} width={useWidth()} />
    );
    return WithWidth;
  };
}
