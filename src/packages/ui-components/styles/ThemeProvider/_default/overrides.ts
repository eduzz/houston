/* eslint-disable max-lines */
import { StyleRules } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Overrides } from '@material-ui/core/styles/overrides';
import { LabComponentNameToClassKey } from '@material-ui/lab/themeAugmentation';

import themeVariable from './variables';

export type LabOverrides = {
  [Name in keyof LabComponentNameToClassKey]?: Partial<StyleRules<LabComponentNameToClassKey[Name]>>;
};

interface ICustomOverrides extends Partial<Overrides>, Partial<LabOverrides> {
  MuiTabScrollButton: any;
}

const SWITCH_MEDIUM_HEIGHT = 20;
const SWITCH_SMALL_HEIGHT = 16;

export default function overrides(palette: Palette): ICustomOverrides {
  return {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '10px 16px',
        height: 40,
        borderRadius: themeVariable.radius(),
        fontWeight: themeVariable.fontWeight('semibold'),

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
          borderColor: themeVariable.colors.grey[300]
        }
      },

      iconSizeMedium: {
        fontSize: 15
      },

      label: {
        fontFamily: themeVariable.fontFamily,
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
          backgroundColor: palette.primary.light
        },
        '&:active': {
          backgroundColor: palette.primary.dark
        },
        '&$disabled': {
          color: palette.grey[500],
          backgroundColor: palette.grey[300]
        }
      },

      outlinedPrimary: {
        borderColor: palette.primary.light,
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
          borderColor: palette.primary.dark,
          color: palette.primary.dark
        },
        '&$disabled': {
          color: palette.grey[300],
          borderColor: palette.grey[300]
        }
      },

      text: {
        '&$disabled': {
          color: palette.grey[300]
        }
      }
    },

    MuiTextField: {
      root: {
        '&.input-size-small input': {
          height: 35,
          padding: '4px 12px'
        }
      }
    },

    MuiInputBase: {
      root: {
        fontFamily: themeVariable.fontFamily,

        '&$disabled': {
          backgroundColor: palette.grey['100']
        }
      }
    },

    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.input-size-small': {
          height: 35,
          padding: '8px 12px'
        }
      },
      selectMenu: {
        height: 45
      },
      iconOutlined: {
        right: 4
      },
      icon: {
        top: 'calc(50% - 14px)'
      }
    },

    MuiSwitch: {
      root: {
        width: 36,
        height: 40,
        padding: 0,
        alignItems: 'center',
        overflow: 'unset',
        '&$sizeSmall': {
          '& > $switchBase': {
            top: 2,
            padding: 12,
            '& + $track': {
              width: 28,
              height: SWITCH_SMALL_HEIGHT
            },
            '&$checked': {
              transform: 'translateX(12px)'
            },
            '& span > $thumb': {
              width: 12,
              height: 12
            }
          }
        }
      },
      switchBase: {
        left: -10,
        padding: 12,
        overflow: 'hidden',
        '&$checked': {
          transform: 'translateX(16px)',
          '& + $track': {
            backgroundColor: palette.primary.main,
            borderColor: palette.primary.main,
            opacity: 1
          }
        },
        '&$disabled': {
          color: palette.grey[400],
          '& + $track': {
            opacity: 1
          }
        }
      },
      thumb: {
        width: 16,
        height: 16,
        boxShadow: 'none',
        transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          color: palette.primary.light
        }
      },
      colorPrimary: {
        '&:hover': {
          color: palette.grey[200]
        },
        '&$checked': {
          color: '#fff',
          '&:hover': {
            color: palette.primary.light
          }
        },
        '&$disabled': {
          '& + $track': {
            backgroundColor: palette.grey[300],
            opacity: 1,
            borderColor: palette.grey[300]
          }
        }
      },
      track: {
        backgroundColor: palette.grey[300],
        border: `2px solid ${palette.grey[300]}`,
        width: 36,
        height: SWITCH_MEDIUM_HEIGHT,
        borderRadius: SWITCH_MEDIUM_HEIGHT / 2,
        opacity: 1
      },
      sizeSmall: {
        width: 28,
        height: 40,
        padding: 0,
        alignItems: 'center',
        overflow: 'unset'
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
        fontFamily: themeVariable.fontFamily,
        fontSize: themeVariable.textSize('x-small')
      },
      contained: {
        marginLeft: 2,
        marginRight: 0
      }
    },

    MuiFormControlLabel: {
      root: {
        color: palette.grey[500],
        fontFamily: themeVariable.fontFamily
      }
    },

    MuiFormControl: {
      marginNormal: {
        marginTop: themeVariable.spacing(1),
        marginBottom: themeVariable.spacing(3)
      }
    },

    MuiFormLabel: {
      root: {
        color: palette.grey[500],
        fontFamily: themeVariable.fontFamily
      }
    },

    MuiInputLabel: {
      root: {
        fontFamily: themeVariable.fontFamily,
        fontSize: themeVariable.textSize() + 1
      },
      outlined: {
        transform: `translate(${themeVariable.spacing(4)}px, ${themeVariable.spacing(4) - 2}px) scale(1)`
      },
      shrink: {
        transform: `translate(${themeVariable.spacing(4)}px, -6px) scale(0.70) !important`
      }
    },

    MuiAlertTitle: {
      root: {
        fontWeight: themeVariable.fontWeight('semibold')
      }
    },

    MuiAlert: {
      root: {
        borderRadius: 4
      },

      icon: {
        alignItems: 'center'
      },

      action: {
        marginRight: 0
      },

      message: {
        fontWeight: themeVariable.fontWeight('regular')
      },

      standardSuccess: {
        backgroundColor: palette.success['light']
      },

      standardError: {
        backgroundColor: palette.error['light']
      },

      standardInfo: {
        backgroundColor: palette.info['light']
      },

      standardWarning: {
        backgroundColor: palette.warning['light']
      }
    },

    MuiTableRow: {
      root: {
        '&$selected': {
          background: 'rgba(177, 177, 177, 0.08)'
        },

        '&$hover': {
          '&:hover': {
            background: palette.grey[100]
          }
        }
      }
    },

    MuiTableCell: {
      root: {
        padding: '12px 20px',
        borderColor: palette.grey[200],
        color: palette.grey[600]
      },

      head: {
        fontWeight: themeVariable.fontWeight('semibold'),
        color: palette.grey[600],
        lineHeight: themeVariable.lineHeight('compact')
      },

      body: {
        color: palette.grey[600]
      },

      sizeSmall: {
        fontSize: themeVariable.textSize('small'),
        padding: '8px 12px'
      }
    },

    MuiTableSortLabel: {
      root: {
        color: palette.grey[600],

        '&:focus': {
          color: 'inherit'
        },

        '&$active': {
          color: palette.grey[600],

          '&$root': {
            '&$active': {
              '& $icon': {
                color: palette.grey[600]
              }
            }
          }
        }
      }
    },

    MuiMenuItem: {
      root: {
        fontSize: themeVariable.textSize('normal'),
        fontWeight: themeVariable.fontWeight('regular')
      }
    },

    MuiPaginationItem: {
      root: {
        margin: '0 1px',
        minWidth: 32,
        minHeight: 30,
        padding: '0 4px',
        fontWeight: themeVariable.fontWeight('semibold'),

        '&$selected': {
          color: palette.primary.main
        }
      }
    },

    MuiPagination: {
      ul: {
        '& li': {
          '&:first-child, &:last-child': {
            borderRadius: 4
          },

          '&:first-child': {
            marginRight: 4
          },

          '&:last-child': {
            marginLeft: 4
          }
        }
      }
    },

    MuiIconButton: {
      colorPrimary: {
        '&:hover, &:focus': {
          backgroundColor: `${palette.grey[200]}`
        },
        '&:active': {
          backgroundColor: `${palette.grey[300]}`
        }
      }
    },

    MuiTabs: {
      root: {
        height: 40,
        minHeight: 40,
        borderBottom: `1px solid ${palette.grey[200]}`
      },
      scrollButtons: {}
    },

    MuiTabScrollButton: {
      root: {
        color: palette.primary['main'],
        opacity: 1,
        '&$disabled': {
          opacity: 1,
          color: palette.grey[300]
        }
      }
    },

    MuiTab: {
      root: {
        height: 40,
        minHeight: 40,
        minWidth: '0 !important',
        lineHeight: themeVariable.lineHeight('normal'),
        fontSize: themeVariable.textSize('small'),
        fontWeight: themeVariable.fontWeight('semibold'),
        textTransform: 'none',
        padding: `0px ${themeVariable.spacing(4)}px`
      },
      labelIcon: {
        minHeight: 40,
        paddingTop: 0
      },
      wrapper: {
        flexDirection: 'row',
        '& > *:first-child': {
          marginBottom: '0 !important',
          maxWidth: 20,
          maxHeight: 20,
          marginRight: themeVariable.spacing(2)
        }
      },
      textColorPrimary: {
        color: palette.grey[400],
        transition: '0.3s',
        border: '2px solid transparent',
        borderBottom: 'none',
        borderRadius: `${themeVariable.radius(1)}px ${themeVariable.radius(1)}px 0 0`,
        '& svg': {
          fill: palette.grey[500],
          transition: '0.3s'
        },
        '&:focus': {
          borderColor: palette.grey[300]
        },
        '&:hover:not($selected):not(:active)': {
          color: palette.primary['light'],
          '& svg': {
            fill: palette.primary['light']
          }
        },
        '&:active': {
          color: palette.primary['dark'],
          '& svg': {
            fill: palette.primary['dark']
          }
        },
        '&$selected': {
          color: palette.primary['main'],
          '& svg': {
            fill: palette.primary['main']
          }
        },
        '&$disabled': {
          color: palette.grey[300],
          '& svg': {
            fill: palette.grey[300]
          }
        }
      }
    },

    MuiTooltip: {
      tooltip: {
        fontSize: themeVariable.textSize('xx-small'),
        backgroundColor: palette.grey[600],
        letterSpacing: 0.5
      },

      arrow: {
        color: palette.grey[600]
      }
    },

    MuiTypography: {
      body2: {
        color: palette.grey[400]
      }
    },

    MuiStep: {
      horizontal: {
        paddingLeft: 0,
        paddingRight: 0
      }
    },

    MuiStepLabel: {
      root: {
        '&$error': {
          color: palette.error.main
        }
      },
      label: {
        color: palette.grey[300],
        fontSize: themeVariable.textSize('default'),
        lineHeight: 1.5,
        fontWeight: themeVariable.fontWeight('semibold'),
        '&$active': {
          color: palette.success.main,
          fontWeight: themeVariable.fontWeight('semibold')
        },
        '&$completed': {
          color: palette.success.main,
          fontWeight: themeVariable.fontWeight('semibold')
        }
      },
      iconContainer: {
        paddingRight: 18
      }
    }
  };
}
