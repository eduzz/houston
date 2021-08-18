import nestedComponent from '@eduzz/houston-ui/Helpers/nestedComponent';

import Action from './Action';
import Body from './Body';
import Cell from './Cell';
import Collapse from './Collapse';
import Column from './Column';
import Empty from './Empty';
import Error from './Error';
import Header from './Header';
import Pagination from './Pagination';
import Row from './Row';
import Table from './Table';

export default nestedComponent(Table, {
  Body,
  Cell,
  Column,
  Collapse,
  Empty,
  Header,
  Row,
  Error,
  Pagination,
  Action
});
