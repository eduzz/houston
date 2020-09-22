/* eslint-disable max-lines */
import { Overrides } from '@material-ui/core/styles/overrides';

const overrides: Overrides = {
  MuiButton: {
    root: {
      textTransform: 'none',
      padding: '0px 16px',
      height: 40,
      borderRadius: 4,
      fontWeight: 600
    },

    sizeSmall: {
      height: 30
    },

    sizeLarge: {
      height: 50
    },

    startIcon: {
      marginRight: 8
    },

    contained: {
      padding: '0px 16px',

      '&$disabled': {
        color: '#546E7A !important',
        backgroundColor: '#B0BEC5'
      }
    },

    outlined: {
      padding: '0px 16px',

      '&$disabled': {
        color: '#B0BEC5',
        borderColor: '#B0BEC5'
      }
    },

    text: {
      padding: '0px 16px',

      '&$disabled': {
        color: '#B0BEC5'
      }
    }
  },

  MuiTypography: {
    root: {
      lineHeight: 1.5,
      fontWeight: 400
    },

    body1: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 400
    },

    body2: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h1: {
      fontSize: 32,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h2: {
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h3: {
      fontSize: 20,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h4: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h5: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h6: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 400
    },

    subtitle1: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400
    },

    subtitle2: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 400
    }
  },

  MuiTooltip: {
    tooltipPlacementTop: {
      padding: '8px 12px',
      fontWeight: 600,
      fontSize: 13,
      backgroundColor: 'rgba(97, 97, 97, 1)'
    }
  },

  MuiListItemText: {
    root: {
      margin: 0,

      '& span': {
        fontSize: 14,
        color: '#546E7A'
      }
    }
  },

  MuiIconButton: {
    root: {
      color: '#bbb'
    }
  },

  MuiInputLabel: {
    root: {
      transform: 'none',

      '&$focused': {
        color: '#e6e6e6'
      },

      '&$error': {
        color: '#f44336'
      }
    },

    formControl: {
      transform: 'none',
      position: 'relative',
      fontSize: 14,
      fontWeight: 600
    },

    shrink: {
      transform: 'none'
    }
  },

  MuiFormLabel: {
    root: {
      color: 'rgb(187 187 187)',

      '&$disabled': {
        color: 'rgb(99 99 99 / 98%)'
      }
    }
  },

  MuiInputBase: {
    root: {
      background: 'white',
      border: '1px solid #E7E7E7',
      borderRadius: 4,
      padding: 0,
      fontSize: 14,
      transition: '0.2s linear',
      color: '#222',

      '&$focused': {
        borderColor: '#B0BEC5'
      },

      '&$disabled': {
        background: '#f9f9f9'
      }
    },

    input: {
      background: 'transparent',
      fontSize: 14,
      boxSizing: 'border-box',
      opacity: 1,
      minHeight: 38,
      transform: 'none',
      animation: 'none',
      borderRadius: 4,
      padding: '0 8px',

      '&::placeholder': {
        color: '#78909C',
        opacity: 1
      },

      '&:-internal-autofill-selected, &:-webkit-autofill': {
        background: 'transparent !important'
      }
    },

    inputMultiline: {
      padding: '4px 12px'
    }
  },

  MuiInputAdornment: {
    positionEnd: {
      width: 35,
      height: 'auto',
      marginLeft: 0,

      '& button': {
        padding: 0
      },

      '& p': {
        color: '#222',
        width: '100%',
        textAlign: 'center',
        fontWeight: 600
      }
    }
  },

  MuiInput: {
    underline: {
      '&:before, &:after': {
        display: 'none',
        transform: 'none'
      }
    },

    formControl: {
      marginTop: '8px !important'
    }
  },

  MuiSelect: {
    select: {
      borderRadius: 4,
      minHeight: 38,
      lineHeight: '38px',

      '&:focus': {
        borderRadius: 4,
        backgroundColor: 'white'
      }
    }
  },

  MuiList: {
    root: {
      background: 'white'
    }
  },

  MuiListItem: {
    root: {
      color: '#222'
    }
  },

  MuiMenuItem: {
    root: {
      fontSize: 14
    }
  },

  MuiCheckbox: {
    colorPrimary: {
      padding: 0,
      marginRight: 8
    }
  },

  MuiChip: {
    colorPrimary: {
      backgroundColor: 'rgb(59 64 77 / 72%)',
      color: '#d7d7d7',
      transition: '0.15s linear',

      '&:hover, &:focus, &:active': {
        backgroundColor: 'rgb(59 64 77 / 72%)'
      }
    },

    deleteIconColorPrimary: {
      width: 18,
      height: 18,
      color: 'rgb(11 8 8 / 70%)',

      '&:hover, &:focus, &:active': {
        backgroundColor: 'rgb(59 64 77 / 72%)'
      }
    },

    deletableColorPrimary: {
      '&:hover, &:focus, &:active': {
        backgroundColor: 'rgb(59 64 77 / 72%)'
      }
    },

    clickableColorPrimary: {
      '&:hover, &:focus, &:active': {
        backgroundColor: 'rgb(46 50 59 / 72%)'
      }
    }
  },

  MuiMenu: {
    paper: {
      maxHeight: 250
    }
  },

  MuiTableRow: {
    root: {
      '& td, th': {
        borderBottomColor: 'rgb(0 0 0 / 30%)'
      }
    }
  },

  MuiTablePagination: {
    toolbar: {
      padding: 0,
      margin: 0,
      display: 'block',
      textAlign: 'center'
    },

    spacer: {
      display: 'block'
    },

    caption: {
      display: 'block',
      width: '100%',
      textAlign: 'center'
    },

    actions: {
      marginLeft: 0,
      padding: 0,
      textAlign: 'center'
    }
  },

  MuiBadge: {
    colorError: {
      backgroundColor: 'rgb(59 64 77 / 100%)',
      fontWeight: 600
    }
  },

  MuiCssBaseline: {
    '@global': {
      '@font-face': [
        {
          fontFamily: 'Open Sans',
          fontWeight: 400
        }
      ]
    }
  },

  MuiSnackbarContent: {
    root: {
      fontWeight: 600
    }
  },

  MuiTab: {
    textColorPrimary: {
      minWidth: 70,
      color: '#bbbbbb'
    }
  },

  MuiTableCell: {
    root: {
      padding: 6
    },

    head: {
      fontWeight: 600,
      padding: '12px 6px'
    }
  },

  MuiSwitch: {
    switchBase: {
      color: '#717171'
    },

    thumb: {
      boxShadow:
        '0 3px 5px -1px rgba(70, 75, 82, .04), 0 6px 10px 0 rgba(70, 75, 82, .04), 0 1px 18px 0 rgba(70, 75, 82, .30)'
    }
  },

  MuiFormControlLabel: {
    label: {
      fontSize: 14,
      marginLeft: 4,
      fontWeight: 600
    }
  },

  MuiBackdrop: {
    root: {
      backgroundColor: 'rgb(103 103 103 / 78%)'
    }
  },

  MuiToolbar: {
    regular: {
      minHeight: '54px !important'
    }
  },

  MuiAvatar: {
    root: {
      width: 36,
      height: 36,
      fontSize: 11
    }
  },

  MuiDialog: {
    paper: {
      margin: 12
    },

    paperFullWidth: {
      width: 'calc(100% - 12px)'
    }
  },

  MuiDivider: {
    root: {
      backgroundColor: 'rgb(76 76 76 / 55%)'
    }
  },

  MuiFormHelperText: {
    root: {
      lineHeight: '1.35'
    }
  }
};

export default overrides;
