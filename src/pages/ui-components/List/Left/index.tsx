import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

export interface ListLeftProps extends IStyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ListLeft = ({ ...rest }: ListLeftProps) => <div {...rest} />;

export default React.memo(
  styled(ListLeft, { label: 'houston-list-item-left' })(({ theme }) => {
    return css`
      margin-right: ${theme.spacing.inline.xxxs};
    `;
  })
);
