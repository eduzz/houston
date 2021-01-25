import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@eduzz/houston-ui/Button';
import { Table } from '@eduzz/houston-ui/Table';

import Toolbar from 'components/Layout/Toolbar';

const TablePage = memo(() => {
  return (
    <Fragment>
      <Toolbar title='Table' />

      <Card>
        <CardContent>
          <Table>
            <Table.Column label='fernando' />
          </Table>
        </CardContent>

        <CardContent>
          <Button
            onClick={() =>
              window.open('https://github.com/eduzz/houston/tree/master/packages/ui-components/Table', '_blank')
            }
          >
            Documentation
          </Button>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default TablePage;
