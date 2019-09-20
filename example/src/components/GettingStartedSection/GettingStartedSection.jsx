/* eslint-disable jsx-a11y/accessible-emoji */
// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import Helmet from 'react-helmet';
import BrandingSection from '../BrandingSection';

import styles, { type ClassKey } from './styles';
import links from '../../data/links';

const demoLink = links[1];

type Props = {
  classes: Object,
  title: string,
  version: string,
};

const GettingStartedSection = ({ classes, title, version }: Props) => (
  <div className={classes.wrapper}>
    <Helmet title="Easy peasy 🍋 squeezy" />
    <BrandingSection title={title} subtitle={version} />
    <Typography variant="h5" className={classes.section} color="inherit">
      1. Install
    </Typography>
    <div className={classes.code}>
      <SyntaxHighlighter language="bash" style={okaidia}>
        npm install --save material-ui-layout
      </SyntaxHighlighter>
    </div>
    <div className={classes.section}>
      <Typography variant="h5" color="inherit">
        2. Implement layouts easily
      </Typography>
      <div className={classes.code}>
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {`
        import React from 'react'
        import Layout from 'material-ui-layout'
        
        import AppBarContent from '../components/AppBarContent'
        import FooterContent from '../components/AppBarContent'
        import DrawerContent from '../components/AppBarContent'
        
        const MyAppLayout = children => (
            <Layout
            appBarContent={<AppBarContent/>}
            leftDrawerContent={<DrawerContent />}
            footerContent={<FooterContent />}
            stickyFooter
            >
            {children}
            </Layout>
        )
        
        export default MyAppLayout
        `}
        </SyntaxHighlighter>
      </div>
      <Typography variant="caption" color="inherit">
        {
          "*this example is really simple... don't worry it has a lot of options to customize it and control it"
        }
      </Typography>
    </div>
    <Typography variant="h5" className={classes.section} color="inherit">
      3. ??
    </Typography>
    <Typography variant="h5" className={classes.section} color="inherit">
      4. Profit
    </Typography>
    <div className={classes.section}>
      <Typography variant="h5" color="inherit">
        Not convinced? 🤔
        <br />
        Play with the different options 🕹️
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        className={classes.button}
        onClick={demoLink.onClick}
      >
        <demoLink.icon className={classes.buttonIcon} />
        {demoLink.label}
      </Button>
    </div>
  </div>
);

export default withStyles<ClassKey, *, *>(styles)(GettingStartedSection);
