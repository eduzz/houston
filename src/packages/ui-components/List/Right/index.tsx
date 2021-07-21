import * as React from 'react';

export interface IListRightProps {
  id?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  text?: string;
}

export default (() => null) as React.FC<IListRightProps>;
