import * as React from 'react';

type ITableOptionExtends = 'id' | 'className' | 'style' | 'children';

type IOptionFunction = (data: unknown) => boolean;

export interface ITableOptionProps extends Pick<React.HTMLAttributes<HTMLDivElement>, ITableOptionExtends> {
  onClick?: (data: unknown) => void;
  disabled?: IOptionFunction | boolean;
  hide?: IOptionFunction | boolean;
  icon?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Option(props: ITableOptionProps): null {
  return null;
}

export default React.memo(Option);
