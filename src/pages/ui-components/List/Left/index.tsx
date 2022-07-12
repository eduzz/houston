import * as React from 'react';

import styled, { cx, css, IStyledProp } from '@eduzz/houston-styles';

export interface IListLeftProps extends IStyledProp, React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ListLeft = ({ className, icon, children, ...rest }: IListLeftProps) => {
  return (
    <div className={cx(className)} {...rest}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
};

export default React.memo(
  styled(ListLeft, { label: 'houston-list-item-left' })(({ theme }) => {
    return css`
      margin-right: ${theme.spacing.inline.xxxs};
    `;
  })
);
