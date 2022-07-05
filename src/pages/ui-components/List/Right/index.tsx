import * as React from 'react';

import { cx, IStyledProp } from '@eduzz/houston-styles';

export interface IListRightProps extends IStyledProp {
  id?: string;
  icon?: React.ReactNode;
}

const ListRight = ({ className, icon }: IListRightProps) => {
  return <div className={cx(className)}>{icon && <span>{icon}</span>}</div>;
};

export default React.memo(ListRight);
