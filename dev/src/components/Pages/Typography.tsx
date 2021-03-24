import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TypographyMUI from '@material-ui/core/Typography';

import Typography from '@eduzz/houston-ui/Typography';

import Toolbar from 'components/Layout/Toolbar';

const FormsPage = memo(() => {
  return (
    <Fragment>
      <Toolbar title='Typography' />

      <Card>
        <CardContent>
          <TypographyMUI gutterBottom variant='h5'>
            Sizes
          </TypographyMUI>

          <Typography size='xx-small'>We are Houston call us!</Typography>
          <Typography size='x-small'>We are Houston call us!</Typography>
          <Typography size='small'>We are Houston call us!</Typography>
          <Typography size='normal'>We are Houston call us!</Typography>
          <Typography size='medium'>We are Houston call us!</Typography>
          <Typography size='large'>We are Houston call us!</Typography>
          <Typography size='x-large'>We are Houston call us!</Typography>
          <Typography size='xx-large'>We are Houston call us!</Typography>
        </CardContent>

        <CardContent>
          <TypographyMUI gutterBottom variant='h5'>
            Weights
          </TypographyMUI>

          <Typography fontWeight='light'>We are Houston call us!</Typography>
          <Typography fontWeight='regular'>We are Houston call us!</Typography>
          <Typography fontWeight='semibold'>We are Houston call us!</Typography>
          <Typography fontWeight='bold'>We are Houston call us!</Typography>
        </CardContent>

        <CardContent>
          <TypographyMUI gutterBottom variant='h5'>
            Line Height
          </TypographyMUI>

          <Typography lineHeight='compact' marginBottom>
            We are Houston call us!
            <br />
            we solve problems
          </Typography>

          <Typography lineHeight='normal' marginBottom>
            We are Houston call us!
            <br />
            we solve problems
          </Typography>

          <Typography lineHeight='comfortable'>
            We are Houston call us!
            <br />
            we solve problems
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default FormsPage;
