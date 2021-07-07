import * as React from 'react';

import { GridSize } from '@material-ui/core/Grid';

import clsx from 'clsx';

import Column from '../../../../Grid/Column';
import createUseStyles from '../../../../styles/createUseStyles';
import themeVariable from '../../../../styles/ThemeProvider/_default/variables';
import Typography from '../../../../Typography';
import { ITableCellProps } from '../../../Cell';
import { ITableColumnProps } from '../../../Column';
import { useTableContext } from '../../../context';

const useStyles = createUseStyles(theme => ({
  column: {
    color: theme.colors.grey[500]
  },

  root: {
    lineHeight: 1.3,

    '&:last-child': {
      marginBottom: 0
    },

    '& .content-cell-truncate': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: themeVariable.textSize('normal')
    }
  },

  alignLeft: {
    textAlign: 'left'
  },

  alignCenter: {
    textAlign: 'center'
  },

  alignRight: {
    textAlign: 'right'
  }
}));

interface IProps extends ITableCellProps {
  index: number;
  columns?: ITableColumnProps[];
}

const CellMobile = React.memo<IProps>(props => {
  const classes = useStyles();
  const { columns } = useTableContext();

  const currentColumns = React.useMemo(() => props?.columns ?? columns, [props.columns, columns]);

  const cellAlign = React.useMemo(
    () => ({
      left: classes.alignLeft,
      center: classes.alignCenter,
      right: classes.alignRight
    }),
    [classes.alignRight, classes.alignCenter, classes.alignLeft]
  );

  const cellProps = React.useMemo(
    () => ({
      id: props?.id,
      onClick: props?.onClick,
      onDoubleClick: props?.onDoubleClick
    }),
    [props?.id, props?.onClick, props?.onDoubleClick]
  );

  const currentColumn = React.useMemo(() => currentColumns[props.index].label, [currentColumns, props.index]);
  const currentAlign = React.useMemo(() => props?.xs?.align ?? props?.align, [props?.align, props?.xs?.align]);

  if (props?.xs?.size === 0) {
    return null;
  }

  return (
    <Column
      {...cellProps}
      xs={(props?.xs?.size as GridSize) ?? 12}
      className={clsx(currentAlign && cellAlign[currentAlign], classes.root, props?.className && props.className)}
      style={{ margin: props?.xs?.margin, order: props?.xs?.order }}
    >
      <Typography size='x-small' fontWeight='regular' lineHeight='compact' className={classes.column}>
        {currentColumn}
      </Typography>

      <div className={`${props?.xs?.truncate ? 'content-cell-truncate' : ''}`}>{props.children}</div>
    </Column>
  );
});

export default CellMobile;
