import nestedComponent from '../Helpers/nestedComponent';
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
    Body: Body,
    Cell: Cell,
    Column: Column,
    Collapse: Collapse,
    Empty: Empty,
    Header: Header,
    Row: Row,
    Error: Error,
    Pagination: Pagination,
    Action: Action
});
