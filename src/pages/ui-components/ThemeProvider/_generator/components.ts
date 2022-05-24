/* eslint-disable max-lines */
import { Components, Palette } from '@mui/material/styles';

import { IHoustonTheme } from '@eduzz/houston-styles';

import DefaultDialogTransition from './DefaultDialogTransition';

const SWITCH_MEDIUM_HEIGHT = 20;
const SWITCH_SMALL_HEIGHT = 16;

export default function components(palette: Partial<Palette>, theme: IHoustonTheme): Components {
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
          borderRadius: theme.border.radius.xs,
          fontWeight: theme.font.weight.semibold,
          fontFamily: theme.font.family.base,
          lineHeight: theme.line.height.sm,
          fontSize: theme.font.size.xxs,

          '&:before': {
            content: '" "',
            position: 'absolute',
            left: -4,
            right: -4,
            top: -4,
            bottom: -4,
            border: '2px solid transparent',
            transition: '0.3s',
            borderRadius: theme.border.radius.sm
          },

          '&:focus:not(:active):not(:hover):before': {
            borderColor: palette.grey[300]
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
              transform: `translate(${theme.spacing.xxxs}, ${theme.spacing.nano}) scale(1)`
            }
          }
        }
      }
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: theme.font.family.base,

          '&.Mui-disabled': {
            backgroundColor: palette.grey['100']
          }
        }
      }
    },

    MuiInputAdornment: {
      styleOverrides: {
        positionEnd: {
          width: 28
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
          fontSize: theme.font.size.xs,
          padding: `${theme.spacing.xxxs} ${theme.spacing.xxxs}`
        },
        inputMultiline: {
          minHeight: 96
        }
      }
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: theme.font.family.base,
          fontSize: theme.font.size.xxxs,
          lineHeight: theme.line.height.sm
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
          fontFamily: theme.font.family.base
        }
      }
    },

    MuiFormControl: {
      styleOverrides: {
        marginNormal: {
          marginTop: theme.spacing.quarck,
          marginBottom: theme.spacing.xxxs
        }
      }
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: palette.grey[500],
          fontFamily: theme.font.family.base
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: theme.font.family.base,
          fontSize: theme.font.size.xs
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
          fontWeight: theme.font.weight.semibold
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
          fontWeight: theme.font.weight.regular,
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
          fontWeight: theme.font.weight.semibold,
          color: palette.grey[600],
          lineHeight: theme.line.height.sm
        },

        body: {
          color: palette.grey[600]
        },

        sizeSmall: {
          fontSize: theme.font.size.xxs,
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
          fontSize: theme.font.size.xs,
          fontWeight: theme.font.weight.regular
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
          fontWeight: theme.font.weight.semibold,

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
          lineHeight: theme.line.height.md,
          fontSize: theme.font.size.xxs,
          fontWeight: theme.font.weight.semibold,
          textTransform: 'none',
          padding: `0 ${theme.spacing.xxxs}`
        },
        labelIcon: {
          minHeight: 40,
          paddingTop: 0,
          flexDirection: 'row',
          '& > svg': {
            marginBottom: '0 !important',
            maxWidth: 20,
            maxHeight: 20,
            marginRight: theme.spacing.nano
          }
        },
        textColorPrimary: {
          color: palette.grey[400],
          transition: '0.3s',
          border: '2px solid transparent',
          borderBottom: 'none',
          borderRadius: `${theme.border.radius.xs} ${theme.border.radius.xs} 0 0`,
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
          fontSize: theme.font.size.xxxs,
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
          fontSize: theme.font.size.xs,
          lineHeight: 1.5,
          fontWeight: theme.font.weight.semibold,
          '&$active': {
            color: palette.success.main,
            fontWeight: theme.font.weight.semibold
          },
          '&$completed': {
            color: palette.success.main,
            fontWeight: theme.font.weight.semibold
          }
        },
        iconContainer: {
          paddingRight: 18
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d'
        }
      }
    }
  };
}
