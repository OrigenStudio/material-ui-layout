// @flow

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  layoutConfig: Object,
};

class SyntaxShow extends React.PureComponent<Props> {
  render() {
    const { layoutConfig } = this.props;

    const appBarContent =
      layoutConfig.appBarContentType === 'simple'
        ? '<BasicAppBar {/* ... appBarContentProps */} />'
        : '<TwoRowsAppBar {/* ...appBarContentProps */} />';

    const mainBooleanProps = `${
      layoutConfig.stickyFooter ? 'stickyFooter // default false' : ''
    }${
      layoutConfig.stickyFooter && layoutConfig.appBarContentType !== 'simple'
        ? '\n \t \t  '
        : ''
    }${
      layoutConfig.appBarContentType !== 'simple'
        ? 'usingTwoRowAppBar // default false'
        : ''
    }`;

    const drawerBooleanProps = `${
      layoutConfig.leftDrawerUnder ? 'leftDrawerUnder // default false' : ''
    }${
      layoutConfig.leftDrawerUnder && layoutConfig.rightDrawerUnder
        ? '\n \t \t  '
        : ''
    }${
      layoutConfig.rightDrawerUnder ? 'rightDrawerUnder // default false' : ''
    }`;

    const codestring = `
  import React from 'react';
  import Layout, {
    ${
      layoutConfig.appBarContentType === 'simple'
        ? 'BasicAppBar'
        : 'TwoRowsAppBar'
    },
    BasicFooter,
    BasicDrawer,
  } from 'material-ui-layout';

  // Defined here for link format reference
  const links = [
    {
      href: 'https://material-ui.com/',
      label: 'Material-UI',
    },
    {
      href: 'https://github.com/OrigenStudio/material-ui-layout/tree/develop/src',
      label: 'GitHub',
    },
  ];

  class AppLayout extends React.Component {
    render(){
      const {children} = this.props;
      return(
        <Layout
          ${mainBooleanProps}
          ${
            layoutConfig.mainGrow ? 'mainGrow' : 'mainGrow={false}'
          } // default true
          appBarPosition={"fixed"} //default value
          appBarContent={${appBarContent}} // If no content it will render null
          appBarProps={/* props to the AppBar wrapper component eg. color, className */}
          
          footerContent={<BasicFooter {/* footerContentProps */} /> } // If no content it will render null
          footerProps={/* props to the Footer wrapper component eg. color, className */}
          
          ${drawerBooleanProps}
          leftDrawerContent={<BasicDrawer links={links} />} // If no content it will render null
          leftDrawerType="${layoutConfig.leftDrawerType}" // default temporary
          rightDrawerContent={<BasicDrawer links={links} />} // If no content it will render null
          rightDrawerType="${layoutConfig.rightDrawerType}" // default temporary

          // For state control the layout can either be controlled from the outside using e.g. Redux
          // or internally managed. If it is not specified, then it will be self managed.
          // If you want to control it externally you'll have to use this props.
          // Check the docs for more details
          leftDrawerOpen={/* Add here your left drawer state*/}
          onLeftDrawerOpenChange={/* Add here you function to update the left drawer state*/}
          rightDrawerOpen={/* Add here your right drawer state*/}
          onRightDrawerOpenChange={/* Add here you function to update the right drawer state*/}
          >
          // Inside the children you can have components that use the LayoutActions.Consumer to have access to
          // layout state modifiers
            {children}
          </Layout>
        )
      }
    }
  }

  export default AppLayout;
  `;

    return (
      <SyntaxHighlighter language="jsx" style={okaidia} showLineNumbers>
        {codestring}
      </SyntaxHighlighter>
    );
  }
}

export default SyntaxShow;
