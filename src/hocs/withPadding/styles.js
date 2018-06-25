const styles = theme => ({
  wrapper: {
    // width: '100%', // TODO disabled however if there are issue with padding here is a potential source. Delete if no issues found.
    display: 'flex',
    flex:'1',
    position: 'relative',
  },
  growingPadding:{
    padding: `${theme.spacing.unit * 1}px`,
  },
  scrollingPadding:{
    paddingLeft: `${theme.spacing.unit * 1}px`,
    paddingRight: `${theme.spacing.unit * 1}px`,
  },
  [theme.breakpoints.up('sm')]:{
    growingPadding:{
      padding: `${theme.spacing.unit * 1.5}px`,
    },
    scrollingPadding:{
      paddingRight: `${theme.spacing.unit * 1.5}px`,
      paddingLeft: `${theme.spacing.unit * 1.5}px`,
    }
  },
  [theme.breakpoints.up('md')]:{
    growingPadding:{
      padding: `${theme.spacing.unit * 2}px`,
    },
    scrollingPadding:{
      paddingRight: `${theme.spacing.unit * 2}px`,
      paddingLeft: `${theme.spacing.unit * 2}px`,
    }
  },
  [theme.breakpoints.up('lg')]:{
    growingPadding:{
      padding: `${theme.spacing.unit * 3}px`,
    },
    scrollingPadding:{
      paddingRight: `${theme.spacing.unit * 3}px`,
      paddingLeft: `${theme.spacing.unit * 3}px`,
    }
  },
});

export default styles;
