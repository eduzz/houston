import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Tabs from '@eduzz/houston-ui/Tabs';
import Typography from '@eduzz/houston-ui/Typography';

import Toolbar from 'components/Layout/Toolbar';

const TabsPage = memo(() => {
  return (
    <Fragment>
      <Toolbar title='Tabs' />

      <Card>
        <CardContent>
          <Tabs>
            <Tabs.Content label='Content 1'>
              <Typography>Content 1</Typography>
            </Tabs.Content>

            <Tabs.Content label='Content 2'>
              <Typography>Content 2</Typography>
            </Tabs.Content>
          </Tabs>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default TabsPage;
