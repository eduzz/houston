import createUseStyles from '../styles/createUseStyles';

const useStyles = createUseStyles({
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
});

export default useStyles;
