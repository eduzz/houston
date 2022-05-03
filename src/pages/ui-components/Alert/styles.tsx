import createUseStyles from '@eduzz/houston-styles/createUseStyles';

const useStyles = createUseStyles(theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },

  message: {
    width: '100%'
  },

  controlButtons: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',

    '& button': {
      marginLeft: 4
    }
  },

  action: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingLeft: 0,
      paddingBottom: 10,
      paddingTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',

      '& button': {
        marginRight: 4,
        marginLeft: 0,
        display: 'block',
        width: '100%'
      }
    }
  },

  controlButtonsMultiline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 16,

    '& button': {
      marginLeft: 4
    }
  },

  multilineIcon: {
    alignItems: 'flex-start',

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },

  multilineAction: {
    paddingLeft: 0
  }
}));

export default useStyles;
