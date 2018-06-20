// @flow

const styles = (theme: Object): Object => {
  const backgroundColorDefault: string =
    theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    footer: {
      padding: '20px 10px', // TODO use units and spacing
    },
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault),
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  };
};

export default styles;
