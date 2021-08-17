import createUseStyles from '../styles/createUseStyles';

const useStyles = createUseStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },

  message: {
    width: '100%'
  },

  controlButtons: {
    display: 'flex',
    alignItems: 'center',

    '& button': {
      marginLeft: 4
    }
  },

  action: {
    [theme.breakpoints.down('sm')]: {
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
    alignItems: 'flex-start'
  },

  multilineAction: {
    paddingLeft: 0
  }
}));

export default useStyles;
