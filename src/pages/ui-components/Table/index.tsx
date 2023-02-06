import Action from './Action';
import Body from './Body';
import Cell from './Cell';
import Collapse from './Collapse';
import Column from './Column';
import Header from './Header';
import Pagination from './Pagination';
import Row from './Row';
import Table from './Table';
import nestedComponent from '../utils/nestedComponent';

export default nestedComponent(Table, {
  Body,
  Cell,
  Column,
  Collapse,
  Header,
  Row,
  Pagination,
  Action
});
