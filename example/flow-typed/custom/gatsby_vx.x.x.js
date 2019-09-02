// @flow
// flow-typed signature: ae4cd9ad1a666e1edf1a3b7f975148c8
// flow-typed version: <<STUB>>/gatsby_v2.0.106/flow_v0.91.0

/**
 * Gatsby is a blazing fast modern site generator for React.
 * 
 * https://www.gatsbyjs.org/docs/
 */

declare module 'gatsby' {
  declare type RenderCallback = (data: any) => React$Node;

  declare export type StaticQueryProps = {
    query: any,
    render?: RenderCallback,
    children?: RenderCallback,
  };

  declare export class StaticQuery extends React$Component<StaticQueryProps> {}
  
  declare export function useStaticQuery<T>(query: string): T;

  declare export function graphql(parts: string[]): string; 

  // eslint-disable-next-line import/prefer-default-export
  declare export { default as Link } from 'gatsby-link';
  declare export * from 'gatsby-link';
}
