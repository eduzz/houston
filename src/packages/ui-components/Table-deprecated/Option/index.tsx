import * as React from 'react';

type ITableOptionExtends = 'id' | 'className' | 'children';

type IOptionFunction = (data: unknown) => boolean;

export interface ITableOptionProps extends Pick<React.HTMLAttributes<HTMLDivElement>, ITableOptionExtends> {
  onClick?: (data: unknown) => void;
  disabled?: IOptionFunction | boolean;
  hide?: IOptionFunction | boolean;
  icon?: React.ReactNode;
}

export default (() => null) as React.FC<ITableOptionProps>;
