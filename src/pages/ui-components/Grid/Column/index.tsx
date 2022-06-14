import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';
import useMediaQuery from '../../hooks/useMediaQuery';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

type sizes = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface IColumn extends IStyledProp {
  children: React.ReactNode;
  xs: sizes;
  sm: sizes;
}

const Column = ({ className, children, xs: xsProp, sm: smProp }: IColumn) => {
  return <div className={className}>{children}</div>;
};

const ALLPARTS = 12;

export default React.memo(
  styled(Column, { label: 'houston-column' })(({ theme, xs: xsProp, sm: smProp }) => {
    const { breakpoints } = useHoustonTheme();
    const isSm = useMediaQuery(breakpoints.down('sm'));

    let part: number;
    isSm ? (part = xsProp) : (part = smProp);

    const basis = (part / ALLPARTS) * 100;
    return css`
      flex-basis: ${basis}%;
      padding-left: 20px;
      height: 60px;
    `;
  })
);
