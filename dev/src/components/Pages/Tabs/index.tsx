import React, { Fragment, memo } from 'react';
import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FaceOutlined from '@material-ui/icons/FaceOutlined';

import Tabs from '@eduzz/houston-ui/Tabs';
import Typography from '@eduzz/houston-ui/Typography';

import Toolbar from 'components/Layout/Toolbar';

const TabsPage = memo(() => {
  const [numberOfTabs] = useState(() => new Array(7).fill('Content'));

  return (
    <Fragment>
      <Toolbar title='Tabs' />

      <Card>
        <CardContent>
          <Typography size='medium'>Simple</Typography>
        </CardContent>
        <Tabs>
          {numberOfTabs.map((_, index) => (
            <Tabs.Content
              key={index}
              label={index === 3 ? 'Tab Disabled' : `Title ${index + 1}`}
              disabled={index === 3}
            >
              <Typography>Content {index + 1}</Typography>
            </Tabs.Content>
          ))}
        </Tabs>
        <CardContent>
          <Typography size='medium'>Icons</Typography>
        </CardContent>
        <Tabs>
          {numberOfTabs.map((_, index) => (
            <Tabs.Content
              icon={<FaceOutlined />}
              key={index}
              label={index === 3 ? 'Tab Disabled' : `Title ${index + 1}`}
              disabled={index === 3}
            >
              <Typography>Content {index + 1}</Typography>
            </Tabs.Content>
          ))}
        </Tabs>
      </Card>
    </Fragment>
  );
});

export default TabsPage;
