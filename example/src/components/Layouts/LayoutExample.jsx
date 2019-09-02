/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/destructuring-assignment */
// @flow

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { navigate } from 'gatsby-link';
import BasicDrawer from 'material-ui-layout/lib/templates/Drawer/BasicDrawer';
import Layout from 'material-ui-layout';
import React from 'react';
import links from '../../data/links';
import AppBarDouble from '../AppBarDouble';
import AppBarSimple from '../AppBarSimple';
import BrandingSection from '../BrandingSection';
import Footer from '../Footer';
import LayoutController from '../LayoutController';
import RightDrawerContent from '../RightDrawerContent';
import SyntaxShow from '../SyntaxShow';
import styles, { type ClassKey } from './styles';

type Props = {
  classes: Object,
  title: string,
  version: string,
};

type State = {
  leftDrawerType: string,
  leftDrawerOpen: true | false,
  leftDrawerUnder: true | false,
  rightDrawerType: string,
  rightDrawerOpen: true | false,
  rightDrawerUnder: true | false,
  appBarContentType: string,
  mainGrow: true | false,
  stickyFooter: true | false,
};

class LayoutExample extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      leftDrawerType: 'temporary',
      leftDrawerOpen: false,
      leftDrawerUnder: true,
      rightDrawerType: 'temporary',
      rightDrawerOpen: false,
      rightDrawerUnder: false,
      appBarContentType: 'simple',
      mainGrow: false,
      stickyFooter: true,
    };
  }

  setLeftDrawerState = leftDrawerState => {
    this.setState({
      leftDrawerOpen: leftDrawerState,
    });
  };

  setRightDrawerState = rightDrawerState => {
    this.setState({
      rightDrawerOpen: rightDrawerState,
    });
  };

  handleRightDrawerTypeChange = event => {
    this.setState({ rightDrawerType: event.target.value });
  };

  toggleRightDrawer = () => {
    const { rightDrawerOpen } = this.state
    this.setState({
      rightDrawerOpen: !rightDrawerOpen,
    });
  };

  toggleRightDrawerUnder = () => {
    const { rightDrawerUnder } = this.state
    this.setState({
      rightDrawerUnder: !rightDrawerUnder,
    });
  };

  toggleLeftDrawer = () => {
    const { leftDrawerOpen } = this.state
    this.setState({
      leftDrawerOpen: !leftDrawerOpen,
    });
  };

  toggleLeftDrawerUnder = () => {
    const { leftDrawerUnder } = this.state
    this.setState({
      leftDrawerUnder: !leftDrawerUnder,
    });
  };

  handleLeftDrawerTypeChange = event => {
    this.setState({ leftDrawerType: event.target.value });
  };

  handleAppBarTypeChange = event => {
    this.setState({ appBarContentType: event.target.value });
  };

  toggleMainGrow = () => {
    const { mainGrow } = this.state
    this.setState({
      mainGrow: !mainGrow,
    });
  };

  toggleStickyFooter = () => {
    const { stickyFooter } = this.state
    this.setState({
      stickyFooter: !stickyFooter,
    });
  };

  render() {
    const { classes, title, version } = this.props;
    return (
      <Layout
        mainGrow={this.state.mainGrow !== false}
        stickyFooter={this.state.stickyFooter !== false}
        usingTwoRowAppBar={this.state.appBarContentType === 'double'}
        appBarContent={
          this.state.appBarContentType === 'simple' ? (
            <AppBarSimple
              title={title}
              links={links}
              toggleLeftDrawer={this.toggleLeftDrawer}
              toggleRightDrawer={this.toggleRightDrawer}
              onLogoClick={() => {
                navigate('/');
              }}
            />
          ) : (
            <AppBarDouble
              title={title}
              toggleLeftDrawer={this.toggleLeftDrawer}
              toggleRightDrawer={this.toggleRightDrawer}
            />
          )
        }
        appBarProps={{ color: 'inherit', className: classes.appBar }}
        footerContent={<Footer />}
        footerProps={{ color: 'inherit', className: classes.footer }}
        leftDrawerContent={<BasicDrawer links={links} />}
        leftDrawerType={this.state.leftDrawerType}
        leftDrawerOpen={this.state.leftDrawerOpen}
        onLeftDrawerOpenChange={this.setLeftDrawerState}
        leftDrawerUnder={this.state.leftDrawerUnder}
        rightDrawerContent={<RightDrawerContent />}
        rightDrawerType={this.state.rightDrawerType}
        rightDrawerOpen={this.state.rightDrawerOpen}
        rightDrawerUnder={this.state.rightDrawerUnder}
        onRightDrawerOpenChange={this.setRightDrawerState}
      >
        <div className={classes.wrapper}>
          <Grid container justify="center" alignContent="center">
            <Grid item xs={12} sm={11} md={9} lg={8}>
              <BrandingSection title={title} subtitle={version} className={classes.section} />
              <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="h6">Layout Controller</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">Play with me! 🕹️</Typography>
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <LayoutController
                    {...this.state}
                    handleAppBarTypeChange={this.handleAppBarTypeChange}
                    handleLeftDrawerTypeChange={this.handleLeftDrawerTypeChange}
                    toggleLeftDrawer={this.toggleLeftDrawer}
                    toggleLeftDrawerUnder={this.toggleLeftDrawerUnder}
                    handleRightDrawerTypeChange={this.handleRightDrawerTypeChange}
                    toggleRightDrawerUnder={this.toggleRightDrawerUnder}
                    toggleRightDrawer={this.toggleRightDrawer}
                    toggleMainGrow={this.toggleMainGrow}
                    toggleStickyFooter={this.toggleStickyFooter}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<CodeIcon />}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="h6">Code</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">Show me 💻</Typography>
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        The code below changes according to the options selected above 🤓
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <SyntaxShow layoutConfig={this.state} />
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default withStyles<ClassKey, *>(styles)(LayoutExample);
