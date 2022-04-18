import createUseStyles from '../styles/createUseStyles';

export interface IStyleParams {
  maxHeight: number;
}

const useStyles = createUseStyles(theme => {
  return {
    tableContainer: {
      position: 'relative'
    },

    table: {
      width: '100%',
      borderSpacing: 0,

      '& .houston-table-label-mobile': {
        display: 'none',
        fontSize: theme.textSize('x-small'),
        fontWeight: theme.fontWeight('semibold')
      },

      '& .houston-table-collapse-button': {
        transition: '.2s linear'
      },

      '& .houston-table-collapse-button-opened': {
        transform: 'rotate(-180deg)'
      },

      '& > tbody > tr > td': {
        boxSizing: 'border-box'
      },

      '& > tbody > tr.houston-table-row-even > td': {
        backgroundColor: theme.colors.grey[100]
      },

      '& > tbody > tr.houston-table-row-even + tr.houston-table-collapse td': {
        backgroundColor: 'transparent'
      },

      '& > tbody > tr.houston-table-loader td': {
        padding: 0
      },

      '& > tbody > tr.houston-table-collapse > td': {
        padding: 0
      },

      '& > tbody > tr.houston-table-collapse:not(.houston-table-collapse-opened) > td': {
        border: 'none'
      },

      '& > tbody > tr.houston-table-collapse:not(.houston-table-collapse-no-padding) > td div.houston-table-collapse-content':
        {
          padding: theme.spacing(3)
        },

      '& > tbody > tr.houston-table-collapse:not(.houston-table-collapse-no-background) > td div.houston-table-collapse-content':
        {
          backgroundColor: theme.colors.grey[200]
        },

      '& > tbody > tr > td.houston-table-action-cell': {
        paddingRight: theme.spacing(3)
      },

      '& > tbody > tr > td.houston-table-action-cell button + button': {
        marginLeft: theme.spacing(1)
      },

      '& > thead > tr > th.houston-column-align-left': {
        textAlign: 'left'
      },

      '& > thead > tr > th.houston-column-align-center': {
        textAlign: 'center'
      },

      '& > thead > tr > th.houston-column-align-right': {
        textAlign: 'right'
      },

      '& > tbody > tr > td.houston-cell-align-left': {
        textAlign: 'left'
      },

      '& > tbody > tr > td.houston-cell-align-center': {
        textAlign: 'center'
      },

      '& > tbody > tr > td.houston-cell-align-right': {
        textAlign: 'right'
      }
    },

    tableResponsive: {
      display: 'block !important',

      '& .houston-table-label-mobile': {
        display: 'block !important'
      },

      '& > thead': {
        display: 'none'
      },

      '& > tbody, & > tfoot, , & > tfoot > tr, & > tfoot > tr > td': {
        display: 'block'
      },

      '& > tbody > tr': {
        display: 'flex',
        width: `calc(100% - ${theme.spacing(4)})`,
        flexWrap: 'wrap',
        position: 'relative',
        boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
        margin: theme.spacing(2),
        marginTop: 0,
        border: `1px solid ${theme.colors.grey[200]}`,
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        boxSizing: 'border-box'
      },

      '& > tbody > tr.houston-table-collapse': {
        padding: 0,
        marginTop: (Number(theme.spacing(2).toString().replace('px', '')) + 2) * -1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'white'
      },

      '& > tbody > tr.houston-table-collapse-opened': {
        boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)'
      },

      '& > tbody > tr.houston-table-collapse > td': {
        marginBottom: 0
      },

      '& > tbody > tr.houston-table-row-even': {
        backgroundColor: theme.colors.grey[100]
      },

      '& > tbody > tr.houston-table-row-even + tr.houston-table-collapse': {
        backgroundColor: theme.colors.grey[100],
        border: 0
      },

      '& > tbody > tr.houston-table-row-even > td': {
        backgroundColor: 'transparent'
      },

      '& > tbody > tr.houston-table-row-even + tr.houston-table-collapse td': {
        backgroundColor: 'transparent'
      },

      '& > tbody > tr.houston-table-row-has-action, & > tbody > tr.houston-table-row-has-collapse': {
        paddingRight: 50,
        '&:before': {
          content: '" "',
          display: 'block',
          position: 'absolute',
          borderLeft: `1px solid ${theme.colors.grey[200]}`,
          right: 40,
          top: 0,
          bottom: 0
        }
      },

      '& > tbody > tr > td.houston-houston-table-collapse-cell': {
        position: 'absolute',
        right: theme.spacing(1),
        top: 'auto',
        bottom: theme.spacing(1),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        paddingRight: 0,
        marginBottom: 0
      },

      '& > tbody > tr > td.houston-table-action-cell': {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        bottom: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        paddingRight: 0,
        marginBottom: 0
      },

      '& > tbody > tr > td.houston-table-action-cell button + button': {
        marginLeft: 0
      },

      '& > tbody > tr > td.houston-table-action-cell button:first-child:not(:last-child)': {
        alignSelf: 'flex-start'
      },

      '& > tbody > tr > td': {
        boxSizing: 'border-box',
        wordBreak: 'break-word',
        padding: 0,
        marginBottom: theme.spacing(2),
        flex: 1,
        border: 'none',
        flexGrow: 0,
        flexBasis: '100%',
        maxWidth: '100%',
        lineHeight: theme.lineHeight('compact')
      },

      '& > tbody > tr.houston-table-loader': {
        padding: 0,
        paddingRight: 0,
        '&:before': {
          display: 'none'
        }
      },

      '& > tbody > tr.table-empty-message': {
        paddingRight: 0,
        '&:before': {
          display: 'none'
        }
      },

      '& > tbody > tr.houston-table-loader > td': {
        marginBottom: 0
      },

      '& > tbody > tr > td.houston-cell-mobile-align-left': {
        textAlign: 'left'
      },

      '& > tbody > tr > td.houston-cell-mobile-align-center': {
        textAlign: 'center'
      },

      '& > tbody > tr > td.houston-cell-mobile-align-right': {
        textAlign: 'right'
      },

      '& > tbody > tr > td.houston-cell-size-true': {
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: '100%'
      },

      '& > tbody > tr > td.houston-cell-size-0': {
        display: 'none'
      },

      ...new Array(12).fill('a').reduce((acc, _, index) => {
        const size = index + 1;
        const percent = `${(size / 12) * 100}%`;

        return {
          ...acc,
          [`& > tbody > tr > td.houston-cell-size-${size}`]: {
            flexGrow: 0,
            maxWidth: percent,
            flexBasis: percent
          }
        };
      }, {})
    }
  };
});

export default useStyles;
