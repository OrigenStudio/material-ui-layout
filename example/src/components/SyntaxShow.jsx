import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
import AppBarSimple from '../components/AppBarSimple';
import AppBarDouble from '../components/AppBarDouble';
import {
  TwoRowsAppBar,
} from '../../../src';
import {
  BasicAppBar,
}  from '../../../src';



const SyntaxShow = (props) => {
  console.log("props",props);
  const using2RowBar=props.gettingState.appBarContentType === "Simple" ? false : true;
  const contentAppSimple=`
    <AppBarSimple
          title="Material-UI-Layout-Demo"
          links={links}
          toggleLeftDrawer={this.state.toggleLeftDrawer}
          toggleRightDrawer={this.state.toggleRightDrawer}
        />`;
  const contentAppDouble=`<AppBarDouble
          topLeftContent="left"
          topCenterContent="center"
          topRightContent="right"
          bottomCenterContent="center"
          toggleLeftDrawer={this.state.toggleLeftDrawer}
          toggleRightDrawer={this.state.toggleRightDrawer}
        />`;
  const constStringBarDouble =
  `
  const AppBarDouble = ({ toggleLeftDrawer, toggleRightDrawer, topLeftContent, topCenterContent, topRightContent, bottomCenterContent  }) =>(

        <TwoRowsAppBar
          topLeftContent={topLeftContent}
          topCenterContent={topCenterContent}
          topRightContent={topRightContent}
          bottomLeftContent={
            <IconButton
              onClick={toggleLeftDrawer}
              color="contrast" aria-label="Delete">
              <DeleteIcon />
          </IconButton>}
          bottomCenterContent={bottomCenterContent}
          bottomRightContent={
            <IconButton
              onClick={toggleRightDrawer}
              color="contrast" aria-label="Delete">
              <DeleteIcon />
          </IconButton>}
        />
      )
  `
  const constStringBarSimple =
  `
  const AppBarSimple = ({ toggleLeftDrawer, toggleRightDrawer, title, links, logo }) => (

        <BasicAppBar
          menuIconAlways={true}
          title={title}
          logo={logo}
          links={links}
          toggleLeftDrawer={toggleLeftDrawer}
          toggleRightDrawer={toggleRightDrawer}
          />
        )

  `
  const whoBarType = props.gettingState.appBarContentType === "Simple" ? contentAppSimple : contentAppDouble;
  const whoConstBar = props.gettingState.appBarContentType === "Simple" ? constStringBarSimple : constStringBarDouble;
  const codeString =
  `
  import React from 'react';
  import AppBarSimple from '../components/AppBarSimple';
  import AppBarDouble from '../components/AppBarDouble';
  import Layout, {
    BasicFooter,
    TwoRowsAppBar,
    BasicDrawer,
    BasicAppBar,
  } from '../../../src';

  const links = [
    {
      href: 'https://material-ui-next.com/',
      label: 'Material-UI',
    },
    {
      href: 'https://github.com/',
      label: 'GitHub',
    },
    {
      href: 'https://www.twitter.es',
      label: 'Twitter',
    },
  ];

  ${whoConstBar}
  <Layout
      mainGrow={${props.gettingState.mainGrow}}
      stickyFooter={${props.gettingState.stickyFooter}}
      usingTwoRowAppBar={${using2RowBar}}
      appBarContent={${whoBarType}}
      footerContent={
      <BasicFooter
        title="Material-UI-Layout-Demo"
        smallMessage="Material-UI-Layout-Demo"
        bigMessage="Demo"
        links={links}
      />}
      leftDrawerContent={<BasicDrawer links={links} />}
      leftDrawerType={${props.gettingState.leftDrawerType}}
      leftDrawerOpen={${props.gettingState.leftDrawerOpen}}
      onLeftDrawerOpenChange={this.setLeftDrawerState}
      rightDrawerContent={<BasicDrawer links={links} />}
      rightDrawerType={${props.gettingState.rightDrawerType}}
      rightDrawerOpen={${props.gettingState.rightDrawerOpen}}
      onRightDrawerOpenChange={this.setRightDrawerState}

    >
     ***YOUR CONTENT***
    </Layout>
      );
    }
  }`
;
  return <SyntaxHighlighter language='javascript' style={prism}>{codeString}</SyntaxHighlighter>;
}

export default SyntaxShow;
