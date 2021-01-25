import * as React from 'react';

import TableMUI from '@material-ui/core/Table';

import WrapperTheme from '../ThemeProvider/WrapperTheme';
import Column from './Column';

interface IProps {}

interface ISubComponents {
  Column: typeof Column;
}

const Table: React.FC<IProps> & ISubComponents = props => {
  const tableRef = React.createRef();
  const { children } = props;

  console.log(React.Children.map(children, child => console.log(child)));

  return (
    <WrapperTheme>
      <TableMUI innerRef={tableRef}></TableMUI>
    </WrapperTheme>
  );
};

Table.Column = Column;

export { Table };
