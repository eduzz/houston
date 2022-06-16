import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

import { useContainer } from '../context';

type sizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface IColumn extends IStyledProp {
  children: React.ReactNode;
  xs: sizes;
  sm?: sizes;
  md?: sizes;
  lg?: sizes;
  xlg?: sizes;
}

const Column = ({ className, children }: IColumn) => <div className={className}>{children}</div>;

const COLUMNS = 12;

export default React.memo(
  styled(Column, { label: 'houston-column' })(({ theme, xs, sm, md, lg, xlg }) => {
    const { spacing } = useContainer();
    return css`
      ${xs &&
      css`
        ${theme.breakpoints.up('xs')} {
          width: calc(${(xs / COLUMNS) * 100}% - ${spacing});
          margin: calc(${spacing} / 2);
        }
      `}

      ${sm &&
      css`
        ${theme.breakpoints.up('sm')} {
          width: calc(${(sm / COLUMNS) * 100}% - ${spacing});
          margin: calc(${spacing} / 2);
        }
      `}

      ${md &&
      css`
        ${theme.breakpoints.up('md')} {
          width: calc(${(md / COLUMNS) * 100}% - ${spacing});
          margin: calc(${spacing} / 2);
        }
      `}
      
      ${lg &&
      css`
        ${theme.breakpoints.up('lg')} {
          width: calc(${(lg / COLUMNS) * 100}% - ${spacing});
          margin: calc(${spacing} / 2);
        }
      `}

      ${xlg &&
      css`
        ${theme.breakpoints.up('xlg')} {
          width: calc(${(xlg / COLUMNS) * 100}% - ${spacing});
          margin: calc(${spacing} / 2);
        }
      `}
    `;
  })
);
