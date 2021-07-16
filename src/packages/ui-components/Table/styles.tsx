import createUseStyles from '../styles/createUseStyles';

export interface IStyleParams {
  maxHeight: number;
}

const useStyles = createUseStyles(theme => ({
  tableContainer: (props: IStyleParams) => ({
    maxHeight: props?.maxHeight
  }),
  table: {
    '& .table-label-mobile': {
      display: 'none'
    },
    '& .table-collapse-button': {
      transition: '.3s'
    },
    '& .table-collapse-button-opened': {
      transform: 'rotate(-180deg)'
    },
    '& > tbody > tr > td': {
      boxSizing: 'border-box'
    },
    '& > tbody > tr.table-row-even > td': {
      backgroundColor: theme.colors.grey[100]
    },
    '& > tbody > tr.table-row-even + tr.table-collapse td': {
      backgroundColor: theme.colors.grey[100]
    },
    '& > tbody > tr.table-loader td': {
      padding: 0
    },
    '& > tbody > tr.table-collapse > td': {
      padding: 0
    },
    '& > tbody > tr.table-collapse:not(.table-collapse-opened) > td': {
      border: 'none'
    },
    '& > tbody > tr.table-collapse:not(.table-collapse-no-padding) > td div.table-collapse-content': {
      padding: theme.spacing(3)
    },
    '& > tbody > tr.table-collapse:not(.table-collapse-no-background) > td div.table-collapse-content': {
      backgroundColor: theme.colors.grey[200]
    },
    '& > tbody > tr > td.table-action-cell': {
      paddingRight: theme.spacing(3)
    },
    '& > tbody > tr > td.table-action-cell button + button': {
      marginLeft: theme.spacing(1)
    }
  },
  tableResponsive: {
    display: 'block !important',
    '& .table-label-mobile': {
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
    '& > tbody > tr.table-collapse': {
      padding: 0,
      marginTop: (theme.spacing(2) + 2) * -1,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      boxShadow: 'none',
      backgroundColor: 'white'
    },
    '& > tbody > tr.table-collapse-opened': {
      boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)'
    },
    '& > tbody > tr.table-collapse > td': {
      marginBottom: 0
    },
    '& > tbody > tr.table-row-even': {
      backgroundColor: theme.colors.grey[100]
    },
    '& > tbody > tr.table-row-even + tr.table-collapse': {
      backgroundColor: theme.colors.grey[100]
    },
    '& > tbody > tr.table-row-even > td': {
      backgroundColor: 'transparent'
    },
    '& > tbody > tr.table-row-even + tr.table-collapse td': {
      backgroundColor: 'transparent'
    },
    '& > tbody > tr.table-row-has-action, & > tbody > tr.table-row-has-collapse': {
      paddingRight: 50,
      '&:before': {
        content: '" "',
        display: 'block',
        position: 'absolute',
        borderLeft: `1px solid ${theme.colors.grey[200]}`,
        right: 38,
        top: 0,
        bottom: 0
      }
    },
    '& > tbody > tr > td.table-action-cell': {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      bottom: theme.spacing(1),
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex',
      paddingRight: 0,
      marginBottom: 0
    },
    '& > tbody > tr > td.table-action-cell button + button': {
      marginLeft: 0
    },
    '& > tbody > tr > td.table-action-cell button:first-child:not(:last-child)': {
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
      maxWidth: '100%'
    },
    '& > tbody > tr.table-loader': {
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
    '& > tbody > tr.table-loader > td': {
      marginBottom: 0
    },
    '& > tbody > tr > td.cell-size-true': {
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: '100%'
    },
    ...new Array(12).fill('a').reduce((acc, _, index) => {
      const size = index + 1;
      const percent = `${(size / 12) * 100}%`;

      return {
        ...acc,
        [`& > tbody > tr > td.cell-size-${size}`]: {
          flexGrow: 0,
          maxWidth: percent,
          flexBasis: percent
        }
      };
    }, {})
  }
}));

export default useStyles;
