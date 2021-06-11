import createUseStyles, { IUseStyleParam } from '../styles/createUseStyles';

export interface IStyleParams {
  maxHeight: number;
  hasActions: boolean;
  mobileWidth: number;
}

const useStyles = createUseStyles({
  tableContainer: ({ props }: IUseStyleParam<IStyleParams>) => ({
    maxHeight: props.maxHeight
  }),
  table: ({ theme, props }: IUseStyleParam<IStyleParams>) => ({
    '& .table-label-mobile': {
      display: 'none'
    },
    [`@media (max-width: ${props.mobileWidth ?? 600}px)`]: {
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
        borderRadius: theme.radius(1),
        margin: theme.spacing(2),
        marginTop: 0,
        border: `1px solid ${theme.colors.grey[200]}`,
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        boxSizing: 'border-box',
        ...(props.hasActions
          ? {
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
            }
          : {})
      },
      '& > tbody > tr > td.table-action-cell': {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1)
      },
      '& > tbody > tr > td': {
        boxSizing: 'border-box',
        padding: 0,
        marginBottom: theme.spacing(2),
        flex: 1,
        border: 'none',
        flexGrow: 0,
        maxWidth: 'none',
        flexBasis: 'auto'
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
  })
});

export default useStyles;
