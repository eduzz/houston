import { StyleRules } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Overrides } from '@material-ui/core/styles/overrides';
import { LabComponentNameToClassKey } from '@material-ui/lab/themeAugmentation';

import themeVariable from './variables';

export type LabOverrides = {
  [Name in keyof LabComponentNameToClassKey]?: Partial<StyleRules<LabComponentNameToClassKey[Name]>>;
} & {};

interface ICustomOverrides extends Partial<Overrides>, Partial<LabOverrides> {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function overrides(pallet: Palette): ICustomOverrides {
  return {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '10px 16px',
        height: 40,
        borderRadius: themeVariable.radius(),
        fontWeight: 600,

        '&:before': {
          content: '" "',
          position: 'absolute',
          left: -4,
          right: -4,
          top: -4,
          bottom: -4,
          border: '2px solid transparent',
          transition: '0.3s',
          borderRadius: themeVariable.radius(2)
        },

        '&:focus:not(:active):not(:hover):before': {
          borderColor: themeVariable.colors.focusLine
        }
      },

      label: {
        lineHeight: themeVariable.lineHeight('compact'),
        fontSize: themeVariable.textSize('small')
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

      containedPrimary: {
        '&:hover': {
          backgroundColor: pallet.primary.light
        },
        '&:active': {
          backgroundColor: pallet.primary.dark
        },
        '&$disabled': {
          color: pallet.grey[500],
          backgroundColor: pallet.grey[300]
        }
      },

      outlinedPrimary: {
        borderColor: pallet.primary.lighter,
        '&:before': {
          left: -5,
          right: -5,
          top: -5,
          bottom: -5
        },
        '&:hover': {
          backgroundColor: 'transparent'
        },
        '&:active': {
          borderColor: pallet.primary.dark,
          color: pallet.primary.dark
        },
        '&$disabled': {
          color: pallet.grey[300],
          borderColor: pallet.grey[300]
        }
      },

      text: {
        '&$disabled': {
          color: pallet.grey[300]
        }
      }
    },

    MuiInputBase: {
      root: {
        '&$disabled': {
          backgroundColor: pallet.grey['100']
        }
      }
    },

    MuiOutlinedInput: {
      input: {
        height: 45,
        boxSizing: 'border-box',
        fontSize: themeVariable.textSize(),
        padding: `${themeVariable.spacing(3)}px ${themeVariable.spacing(4)}px`
      },
      inputMultiline: {
        minHeight: 96
      }
    },

    MuiFormHelperText: {
      root: {
        fontSize: themeVariable.textSize('x-small')
      },
      contained: {
        marginLeft: 2,
        marginRight: 0
      }
    },

    MuiFormControl: {
      marginNormal: {
        marginTop: themeVariable.spacing(1),
        marginBottom: themeVariable.spacing(3)
      }
    },

    MuiInputLabel: {
      root: {
        fontSize: themeVariable.textSize()
      },
      outlined: {
        transform: `translate(${themeVariable.spacing(4)}px, ${themeVariable.spacing(4) - 2}px) scale(1)`
      },
      shrink: {
        transform: `translate(${themeVariable.spacing(4)}px, -6px) scale(0.80) !important`
      }
    },

    MuiAlertTitle: {
      root: {
        fontWeight: 600
      }
    },

    MuiAlert: {
      root: {
        borderRadius: 4
      },

      icon: {
        alignItems: 'center'
      },

      message: {
        fontWeight: 600
      },

      standardSuccess: {
        backgroundColor: '#D2EBD3'
      },

      standardError: {
        backgroundColor: '#FDD9D7'
      },

      standardInfo: {
        backgroundColor: '#CDEBFA'
      },

      standardWarning: {
        backgroundColor: '#FFF4D4'
      }
    }
  };
}
