import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/Code';
import Link from 'gatsby-link';
import React from 'react';
import Layout, { BasicDrawer, BasicFooter } from '../../../src';
import AppBarDouble from '../components/AppBarDouble';
import AppBarSimple from '../components/AppBarSimple';
import SyntaxShow from '../components/SyntaxShow';
import UserDrawer from '../components/UserDrawer';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  panelCode: {
    boxShadow:
      '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
  },
};

const links = [
  {
    href: 'https://material-ui-next.com/',
    label: 'Material-UI',
  },
  {
    href: 'https://github.com/OrigenStudio/material-ui-layout/tree/develop/src',
    label: 'GitHub',
  },
];

const variables = {
  title: 'Material-UI-Layout-Demo',
  smallMessage: 'Material-UI-Layout-Demo',
  tleft: 'left',
  tcenter: 'center',
  tright: 'right',
};

class TwoRowsAppBarLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftDrawerType: undefined,
      leftDrawerOpen: false,
      rightDrawerType: undefined,
      rightDrawerOpen: false,
      appBarContentType: 'Simple',
      mainGrow: false,
      stickyFooter: false,
    };
  }
  setappBarSimple = appBarContentType => {
    this.setState({ appBarContentType: 'Simple' });
  };

  setappBarDoubles = appBarContentType => {
    this.setState({ appBarContentType: 'Double' });
  };

  setTemporarydrawer = leftDrawerType => {
    this.setState({ leftDrawerType: 'temporary' });
  };
  setPersistentdrawer = leftDrawerType => {
    this.setState({ leftDrawerType: 'persistent' });
  };
  setPermanentdrawer = leftDrawerType => {
    this.setState({ leftDrawerType: 'permanent' });
  };

  toggleLeftDrawer = () => {
    this.setState({
      leftDrawerOpen: !this.state.leftDrawerOpen,
    });
  };

  setLeftDrawerState = leftDrawerState => {
    this.setState({
      leftDrawerOpen: leftDrawerState,
    });
  };
  setRightTemporarydrawer = rightDrawerType => {
    this.setState({ rightDrawerType: 'temporary' });
  };
  setRightPersistentdrawer = rightDrawerType => {
    this.setState({ rightDrawerType: 'persistent' });
  };
  setRightPermanentdrawer = rightDrawerType => {
    this.setState({ rightDrawerType: 'permanent' });
  };

  toggleRightDrawer = () => {
    this.setState({
      rightDrawerOpen: !this.state.rightDrawerOpen,
    });
  };

  setRightDrawerState = rightDrawerState => {
    this.setState({
      rightDrawerOpen: rightDrawerState,
    });
  };

  toogleMainGrow = () => {
    this.setState({
      mainGrow: !this.state.mainGrow,
    });
  };

  toogleStickyFooter = () => {
    this.setState({
      stickyFooter: !this.state.stickyFooter,
    });
  };

  render() {
    // Calcs for renders

    return (
      <Layout
        mainGrow={this.state.mainGrow === false ? false : true}
        stickyFooter={this.state.stickyFooter === false ? false : true}
        usingTwoRowAppBar={
          this.state.appBarContentType === 'Simple' ? false : true
        }
        appBarContent={
          this.state.appBarContentType === 'Simple' ? (
            <AppBarSimple
              title={variables.title}
              links={links}
              toggleLeftDrawer={this.toggleLeftDrawer}
              toggleRightDrawer={this.toggleRightDrawer}
            />
          ) : (
            <AppBarDouble
              topLeftContent={variables.tleft}
              topCenterContent={variables.tcenter}
              topRightContent={variables.tright}
              bottomCenterContent={variables.tcenter}
              toggleLeftDrawer={this.toggleLeftDrawer}
              toggleRightDrawer={this.toggleRightDrawer}
            />
          )
        }
        footerContent={
          <BasicFooter
            title={variables.title}
            smallMessage={variables.smallMessage}
            bigMessage="Demo"
            links={links}
          />
        }
        leftDrawerContent={
          <UserDrawer
            urlAvatar="https://www.w3schools.com/w3images/avatar2.png"
            textPrimary="Person"
            textSecondary="example@email.com"
          />
        }
        leftDrawerType={this.state.leftDrawerType}
        leftDrawerOpen={this.state.leftDrawerOpen}
        onLeftDrawerOpenChange={this.setLeftDrawerState}
        rightDrawerContent={<BasicDrawer links={links} />}
        rightDrawerType={this.state.rightDrawerType}
        rightDrawerOpen={this.state.rightDrawerOpen}
        onRightDrawerOpenChange={this.setRightDrawerState}
      >
        <div className={this.props.classes.wrapper}>
          <Grid container>
            <Grid item xs={0} sm={1} md={2} lg={3} />
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <Paper style={{ marginTop: 50, marginBottom: 50 }}>
                <Grid
                  container
                  style={{
                    paddingBottom: 50,
                    paddingTop: 50,
                    paddingLeft: 100,
                    paddingRight: 50,
                  }}
                >
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography type="headline" gutterBottom>
                      AppBar
                    </Typography>
                    <div style={{ paddingLeft: 150 }} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        Simple AppBar
                      </Typography>
                      <Radio
                        checked={this.state.appBarContentType === 'Simple'}
                        onChange={this.setappBarSimple}
                        value="Simple"
                        name="radio button demo"
                        aria-label="D"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        Double AppBar
                      </Typography>
                      <Radio
                        checked={this.state.appBarContentType === 'Double'}
                        onChange={this.setappBarDoubles}
                        value="Double"
                        name="radio button demo"
                        aria-label="E"
                      />
                    </Grid>
                  </Grid>
                  <Divider
                    light
                    style={{
                      maxWidth: '757px',
                      width: '100%',
                      backgroundColor: '#DFDFDF',
                    }}
                  />
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container style={{ paddingTop: 20 }}>
                      <Typography
                        type="headline"
                        gutterBottom
                        style={{ maxWidth: 200 }}
                      >
                        Drawer Left
                      </Typography>
                      <Button
                        raised
                        color="primary"
                        disabled={
                          this.state.leftDrawerType === 'permanent'
                            ? true
                            : false
                        }
                        onClick={this.toggleLeftDrawer}
                        aria-label="I"
                        style={{ marginLeft: 46 }}
                      >
                        {this.state.leftDrawerOpen === true ? (
                          <Typography type="subheadline" gutterBottom>
                            Close
                          </Typography>
                        ) : (
                          <Typography type="subheadline" gutterBottom>
                            Open
                          </Typography>
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        Temporary
                      </Typography>
                      <Radio
                        checked={this.state.leftDrawerType === 'temporary'}
                        onChange={this.setTemporarydrawer}
                        value="temporary"
                        name="radio button demo"
                        aria-label="A"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        Persistent
                      </Typography>
                      <Radio
                        checked={this.state.leftDrawerType === 'persistent'}
                        onChange={this.setPersistentdrawer}
                        value="persistent"
                        name="radio button demo"
                        aria-label="B"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        Permanent
                      </Typography>
                      <Radio
                        checked={this.state.leftDrawerType === 'permanent'}
                        onChange={this.setPermanentdrawer}
                        value="permanent"
                        name="radio button demo"
                        aria-label="C"
                      />
                    </Grid>
                  </Grid>
                  <Divider
                    light
                    style={{
                      maxWidth: '757px',
                      width: '100%',
                      backgroundColor: '#DFDFDF',
                    }}
                  />
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container style={{ paddingTop: 20 }}>
                      <Typography
                        type="headline"
                        gutterBottom
                        style={{ maxWidth: 200 }}
                      >
                        Drawer Right
                      </Typography>
                      <Button
                        raised
                        color="primary"
                        disabled={
                          this.state.rightDrawerType === 'permanent'
                            ? true
                            : false
                        }
                        onClick={this.toggleRightDrawer}
                        aria-label="I"
                        style={{ marginLeft: 30 }}
                      >
                        {this.state.rightDrawerOpen === true ? (
                          <Typography type="subheadline" gutterBottom>
                            Close
                          </Typography>
                        ) : (
                          <Typography type="subheadline" gutterBottom>
                            Open
                          </Typography>
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        Temporary
                      </Typography>
                      <Radio
                        checked={this.state.rightDrawerType === 'temporary'}
                        onChange={this.setRightTemporarydrawer}
                        value="temporary"
                        name="radio button demo"
                        aria-label="F"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        Persistent
                      </Typography>
                      <Radio
                        checked={this.state.rightDrawerType === 'persistent'}
                        onChange={this.setRightPersistentdrawer}
                        value="persistent"
                        name="radio button demo"
                        aria-label="G"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        Permanent
                      </Typography>
                      <Radio
                        checked={this.state.rightDrawerType === 'permanent'}
                        onChange={this.setRightPermanentdrawer}
                        value="permanent"
                        name="radio button demo"
                        aria-label="H"
                      />
                    </Grid>
                  </Grid>
                  <Divider
                    light
                    style={{
                      maxWidth: '757px',
                      width: '100%',
                      backgroundColor: '#DFDFDF',
                    }}
                  />
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container style={{ paddingTop: 20 }}>
                      <Typography type="headline" gutterBottom>
                        Layout Properties
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        mainGrow
                      </Typography>
                      <Switch
                        checked={this.state.mainGrow}
                        onChange={this.toogleMainGrow}
                        aria-label="I"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Grid container style={{ paddingBottom: 20 }}>
                      <Typography
                        type="body2"
                        gutterBottom
                        style={{ marginTop: 10 }}
                      >
                        stickyFooter
                      </Typography>
                      <Switch
                        checked={this.state.stickyFooter}
                        onChange={this.toogleStickyFooter}
                        aria-label="I"
                      />
                    </Grid>
                  </Grid>
                  <Divider
                    light
                    style={{
                      maxWidth: '757px',
                      width: '100%',
                      backgroundColor: '#DFDFDF',
                    }}
                  />
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container style={{ paddingTop: 20 }}>
                      <Typography
                        type="headline"
                        gutterBottom
                        style={{ maxWidth: 200 }}
                      >
                        Source Code
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <ExpansionPanel className={this.props.classes.panelCode}>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} />
                      <ExpansionPanelDetails>
                        <SyntaxShow gettingState={this.state} />
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={0} sm={1} md={2} lg={3} />
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(TwoRowsAppBarLayout);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;