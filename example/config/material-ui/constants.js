// @flow
/* eslint-disable import/prefer-default-export */
import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

/* GatsbyStarterConfig: material-ui initial width

Gatsby renders the files on build time and not at request time so
there is no way of knowing during SSR the size of the client viewport.

Choose the initial width that works best with the project's UI/Layout,
taking into consideration that the page will "jump" from the SSRed html
to the executed JS on the client.
*/
export const INITIAL_BREAKPOINT: Breakpoint = 'md';
