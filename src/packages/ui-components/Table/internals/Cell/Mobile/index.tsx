import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import Column from '../../../../Grid/Column';
import themeVariable from '../../../../ThemeProvider/_default/variables';
import Typography from '../../../../Typography';
import { ITableCellProps } from '../../../Cell';
import { ITableColumnProps } from '../../../Column';
import { useTableContext } from '../../../context';

const useStyles = makeStyles(theme =>
  createStyles({
    column: {
      color: theme.palette.grey[500]
    },

    root: {
      lineHeight: 1.3,

      '&:last-child': {
        marginBottom: 0
      },

      '& .content-cell': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: themeVariable.textSize('normal')
      }
    },

    alignCenter: {
      textAlign: 'center'
    },

    alignRight: {
      textAlign: 'right'
    }
  })
);

interface IProps extends ITableCellProps {
  index: number;
  columns?: ITableColumnProps[];
}

const CellMobile = React.memo<IProps>(props => {
  const classes = useStyles();
  const { columns } = useTableContext();

  const { children } = props;

  const currentColumns = React.useMemo(() => props?.columns ?? columns, [props.columns, columns]);

  const cellAlign = React.useMemo(
    () => ({
      center: classes.alignCenter,
      right: classes.alignRight
    }),
    [classes.alignRight, classes.alignCenter]
  );

  const cellProps = {
    id: props?.id,
    className: props?.className,
    onClick: props?.onClick,
    onDoubleClick: props?.onDoubleClick,
    xs: props?.xs?.size ?? 12
  };

  const currentColumn = React.useMemo(() => currentColumns[props.index].label, [currentColumns, props.index]);
  const currentAlign = React.useMemo(() => props?.xs?.align ?? props?.align, [props?.align, props?.xs?.align]);

  if (!cellProps.xs) {
    return null;
  }

  return (
    <Column
      {...cellProps}
      className={clsx(currentAlign && cellAlign[currentAlign], classes.root)}
      style={{ margin: props?.xs?.margin, order: props?.xs?.order }}
    >
      <Typography size='x-small' fontWeight='regular' lineHeight='compact' className={classes.column}>
        {currentColumn}
      </Typography>

      <div className='content-cell'>{children}</div>
    </Column>
  );
});

export default CellMobile;
