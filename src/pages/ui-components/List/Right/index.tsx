import * as React from 'react';

import styled, { cx, css, IStyledProp } from '@eduzz/houston-styles';

export interface IListRightProps extends IStyledProp, React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ListRight = ({ className, icon, children, onClick, ...rest }: IListRightProps) => {
  return (
    <div onClick={onClick} className={cx(className)} {...rest}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
};

export default React.memo(
  styled(ListRight, { label: 'houston-list-item-right' })(() => {
    return css`
      margin-left: auto;
    `;
  })
);
