// @flow
// flow-typed signature: e2bb88e3d22c89219150cb370c54c6a4
// flow-typed version: <<STUB>>/gatsby-link_v2.0.9/flow_v0.91.0

/**
 * For internal navigation, Gatsby includes a built-in <Link> component as well as a navigate function which is used for programmatic navigation.
 * 
 * Gatsby’s <Link> component enables linking to internal pages as well as a powerful performance feature called preloading. Preloading is used to prefetch resources so that the resources are fetched by the time the user navigates with this component. We use an IntersectionObserver to fetch a low-priority request when the Link is in the viewport and then use an onMouseOver event to trigger a high-priority request when it is likely that a user will navigate to the requested resource.
 * 
 * The component is a wrapper around @reach/router’s Link component that adds useful enhancements specific to Gatsby. All props are passed through to @reach/router’s Link component.
 * 
 * https://www.gatsbyjs.org/docs/gatsby-link/
 */

declare module 'gatsby-link' {
  import type { NavigateOptions } from '@reach/router';

  declare export type Link = React$ComponentType<{
    activeClassName?: string,
    activeStyle?: {},
    innerRef?: Function,
    onClick?: (event: MouseEvent) => void,
    to: string,
  }>;

  declare export type NavigateFn = (to: string, options?: NavigateOptions<{}>) => void;

  declare export type ParsePath = (path: string) => ({
    pathname: string,
    search: string,
    hash: string,
  });

  declare export default Link;

  declare export var navigate: NavigateFn;
  declare export var parsePath: ParsePath;
}
