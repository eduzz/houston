import * as React from 'react';

export interface IColumnProps {
  label: string;
}

const Column: React.FC<IColumnProps> = props => <>{props}</>;

export default React.memo(Column);
