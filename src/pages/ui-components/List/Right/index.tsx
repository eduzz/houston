import * as React from 'react';

import styled, { cx, css, IStyledProp } from '@eduzz/houston-styles';

export interface IListRightProps extends IStyledProp, React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const ListRight = ({ className, icon, onClick, ...rest }: IListRightProps) => {
  return (
    <div onClick={onClick} className={cx(className)} {...rest}>
      {icon && <span>{icon}</span>}
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
