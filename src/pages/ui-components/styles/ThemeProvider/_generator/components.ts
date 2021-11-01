/* eslint-disable max-lines */
import { Components } from '@mui/material/styles';

import { HoustonColors } from '../../types';
import DefaultDialogTransition from './DefaultDialogTransition';
import defaultThemeVariables from './variables';

const SWITCH_MEDIUM_HEIGHT = 20;
const SWITCH_SMALL_HEIGHT = 16;

export default function components(palette: HoustonColors): Components {
  return {
    MuiDialog: {
      defaultProps: {
        TransitionComponent: DefaultDialogTransition
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '10px 16px',
          height: 40,
          borderRadius: defaultThemeVariables.radius(),
          fontWeight: defaultThemeVariables.fontWeight('semibold'),
          fontFamily: defaultThemeVariables.fontFamily,
          lineHeight: defaultThemeVariables.lineHeight('compact'),
          fontSize: defaultThemeVariables.textSize('small'),

          '&:before': {
            content: '" "',
            position: 'absolute',
            left: -4,
            right: -4,
            top: -4,
            bottom: -4,
            border: '2px solid transparent',
            transition: '0.3s',
            borderRadius: defaultThemeVariables.radius(2)
          },

          '&:focus:not(:active):not(:hover):before': {
            borderColor: defaultThemeVariables.colors.grey[300]
          }
        },

        iconSizeMedium: {
          '& > *:first-child': {
            fontSize: 15
          }
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
          '&.Mui-disabled': {
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
          '&.Mui-disabled': {
            color: palette.grey[300],
            borderColor: palette.grey[300]
          }
        },

        text: {
          '&.Mui-disabled': {
            color: palette.grey[300]
          }
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '&.input-size-small': {
            '& input': {
              height: 35,
              padding: '4px 12px'
            },

            '& label': {
              transform: `translate(${defaultThemeVariables.spacing(4)}px, ${
                defaultThemeVariables.spacing(2) + 2
              }px) scale(1)`
            }
          }
        }
      }
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: defaultThemeVariables.fontFamily,

          '&.Mui-disabled': {
            backgroundColor: palette.grey['100']
          }
        }
      }
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent'
          },
          '&.input-size-small': {
            height: 35,
            padding: '8px 32px 8px 12px'
          }
        },
        // selectMenu: {
        //   height: 45
        // },
        iconOutlined: {
          right: 4
        },
        icon: {
          top: 'calc(50% - 14px)'
        }
      }
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 36,
          height: 40,
          padding: 0,
          alignItems: 'center',
          overflow: 'unset'
        },
        switchBase: {
          left: -10,
          padding: 12,
          overflow: 'hidden',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            '& > .MuiSwitch-thumb': {
              color: 'white'
            },
            '& + .MuiSwitch-track': {
              backgroundColor: palette.primary.main,
              borderColor: palette.primary.main,
              opacity: '1 !important'
            }
          },
          '&.Mui-disabled': {
            color: palette.grey[400],
            '& > .MuiSwitch-thumb': {
              color: palette.grey[400]
            },
            '& + .MuiSwitch-track': {
              backgroundColor: palette.grey[300],
              opacity: '1 !important',
              borderColor: palette.grey[300]
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
        track: {
          backgroundColor: palette.grey[300],
          border: `2px solid ${palette.grey[300]}`,
          width: 36,
          height: SWITCH_MEDIUM_HEIGHT,
          borderRadius: SWITCH_MEDIUM_HEIGHT / 2,
          opacity: '1 !important'
        },
        sizeSmall: {
          width: 28,
          height: 40,
          padding: 0,
          alignItems: 'center',
          overflow: 'unset',
          '& > .MuiSwitch-switchBase': {
            top: 2,
            padding: 12,
            '& + .MuiSwitch-track': {
              width: 28,
              height: SWITCH_SMALL_HEIGHT
            },
            '&.Mui-checked': {
              transform: 'translateX(12px)'
            },
            '& > .MuiSwitch-thumb': {
              width: 12,
              height: 12
            }
          }
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          height: 45,
          boxSizing: 'border-box',
          fontSize: defaultThemeVariables.textSize(),
          padding: `${defaultThemeVariables.spacing(3)}px ${defaultThemeVariables.spacing(4)}px`
        },
        inputMultiline: {
          minHeight: 96
        }
      }
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: defaultThemeVariables.fontFamily,
          fontSize: defaultThemeVariables.textSize('x-small'),
          lineHeight: defaultThemeVariables.lineHeight('compact')
        },
        contained: {
          marginLeft: 2,
          marginRight: 0
        }
      }
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: palette.grey[500],
          fontFamily: defaultThemeVariables.fontFamily
        }
      }
    },

    MuiFormControl: {
      styleOverrides: {
        marginNormal: {
          marginTop: defaultThemeVariables.spacing(1),
          marginBottom: defaultThemeVariables.spacing(3)
        }
      }
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: palette.grey[500],
          fontFamily: defaultThemeVariables.fontFamily
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: defaultThemeVariables.fontFamily,
          fontSize: defaultThemeVariables.textSize()
        },
        outlined: {
          transform: 'translate(16px, 12px) scale(1)'
        },
        shrink: {
          transform: 'translate(16px, -6px) scale(0.70) !important'
        }
      }
    },

    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: defaultThemeVariables.fontWeight('semibold')
        }
      }
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 4
        },

        icon: {
          color: `${palette.grey[600]} !important`
        },

        action: {
          marginRight: 0,
          '&:empty': {
            display: 'none'
          }
        },

        message: {
          fontWeight: defaultThemeVariables.fontWeight('regular'),
          color: palette.grey[600],
          width: '100%'
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
      }
    },

    MuiTableRow: {
      styleOverrides: {
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
      }
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px 20px',
          borderColor: palette.grey[200],
          color: palette.grey[600]
        },

        head: {
          fontWeight: defaultThemeVariables.fontWeight('semibold'),
          color: palette.grey[600],
          lineHeight: defaultThemeVariables.lineHeight('compact')
        },

        body: {
          color: palette.grey[600]
        },

        sizeSmall: {
          fontSize: defaultThemeVariables.textSize('small'),
          padding: '8px 12px'
        }
      }
    },

    MuiTableSortLabel: {
      styleOverrides: {
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
      }
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: defaultThemeVariables.textSize('normal'),
          fontWeight: defaultThemeVariables.fontWeight('regular')
        }
      }
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          margin: '0 1px',
          minWidth: 32,
          minHeight: 28,
          padding: 0,
          fontWeight: defaultThemeVariables.fontWeight('semibold'),

          '&$selected': {
            color: palette.primary.main
          },

          '@media screen and (max-width: 599.95px)': {
            width: 26,
            minWidth: 26,
            height: 24
          }
        }
      }
    },

    MuiPagination: {
      styleOverrides: {
        ul: {
          '& li': {
            '&:first-child, &:last-child': {
              borderRadius: 4
            },

            '&:first-child': {
              marginRight: 2
            },

            '&:last-child': {
              marginLeft: 2
            }
          }
        }
      }
    },

    MuiIconButton: {
      styleOverrides: {
        colorPrimary: {
          '&:hover, &:focus': {
            backgroundColor: `${palette.grey[200]}`
          },
          '&:active': {
            backgroundColor: `${palette.grey[300]}`
          }
        }
      }
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          height: 40,
          minHeight: 40,
          borderBottom: `1px solid ${palette.grey[200]}`
        },
        scrollButtons: {
          color: palette.primary['main'],
          opacity: 1,
          '&.Mui-disabled': {
            opacity: 1,
            color: palette.grey[300]
          }
        }
      }
    },

    MuiTab: {
      styleOverrides: {
        root: {
          height: 40,
          minHeight: 40,
          minWidth: '0 !important',
          lineHeight: defaultThemeVariables.lineHeight('normal'),
          fontSize: defaultThemeVariables.textSize('small'),
          fontWeight: defaultThemeVariables.fontWeight('semibold'),
          textTransform: 'none',
          padding: `0px ${defaultThemeVariables.spacing(4)}px`
        },
        labelIcon: {
          minHeight: 40,
          paddingTop: 0,
          flexDirection: 'row',
          '& > svg': {
            marginBottom: '0 !important',
            maxWidth: 20,
            maxHeight: 20,
            marginRight: defaultThemeVariables.spacing(2)
          }
        },
        textColorPrimary: {
          color: palette.grey[400],
          transition: '0.3s',
          border: '2px solid transparent',
          borderBottom: 'none',
          borderRadius: `${defaultThemeVariables.radius(1)}px ${defaultThemeVariables.radius(1)}px 0 0`,
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
          '&.Mui-disabled': {
            color: palette.grey[300],
            '& svg': {
              fill: palette.grey[300]
            }
          }
        }
      }
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: defaultThemeVariables.textSize('x-small'),
          backgroundColor: palette.grey[600],
          letterSpacing: 0.5
        },

        arrow: {
          color: palette.grey[600]
        }
      }
    },

    MuiTypography: {
      styleOverrides: {
        body2: {
          color: palette.grey[400]
        }
      }
    },

    MuiStep: {
      styleOverrides: {
        horizontal: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },

    MuiStepLabel: {
      styleOverrides: {
        root: {
          '&$error': {
            color: palette.error.main
          }
        },
        label: {
          color: palette.grey[300],
          fontSize: defaultThemeVariables.textSize('default'),
          lineHeight: 1.5,
          fontWeight: defaultThemeVariables.fontWeight('semibold'),
          '&$active': {
            color: palette.success.main,
            fontWeight: defaultThemeVariables.fontWeight('semibold')
          },
          '&$completed': {
            color: palette.success.main,
            fontWeight: defaultThemeVariables.fontWeight('semibold')
          }
        },
        iconContainer: {
          paddingRight: 18
        }
      }
    }
  };
}
