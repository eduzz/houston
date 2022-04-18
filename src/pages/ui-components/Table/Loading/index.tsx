import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { useContextSelector } from 'use-context-selector';

import styled, { cx, IStyledProp } from '../../styled';
import Typography from '../../Typography';
import TableContext from '../context';

export interface ITableLoadingProps extends IStyledProp {
  text: React.ReactNode;
}
const TableLoading = React.memo<ITableLoadingProps>(({ text, className }) => {
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  return (
    <tr className={cx(className, 'houston-table-loader')}>
      <td align='center' colSpan={1000}>
        {!isCollapseContent && (
          <>
            <LinearProgress />

            <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className='__text'>
              {text}
            </Typography>
          </>
        )}

        {isCollapseContent && (
          <div className='__text'>
            <CircularProgress size={32} />
          </div>
        )}
      </td>
    </tr>
  );
});

export default styled(TableLoading)`
  & > td > .__text {
    padding: ${({ theme }) => theme.spacing(5)};
  }
`;
