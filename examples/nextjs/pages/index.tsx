import React, { memo } from 'react';

import Column from '@eduzz/houston-ui/Grid/Column';
import Container from '@eduzz/houston-ui/Grid/Container';
import Row from '@eduzz/houston-ui/Grid/Row';
import Typography from '@eduzz/houston-ui/Typography';

import { NextPage } from 'next';
import Image from 'next/image';

const IndexPage: NextPage = memo(() => {
  return (
    <div className='app'>
      <Container layout='fluid'>
        <Row>
          <Column xs={12}>
            <div className='logo'>
              <Image src='/images/logo.svg' alt='Logo' width={400} height={180} />
            </div>
          </Column>

          <Column md={12}>
            <Typography size='medium'>
              Houston with <b>NextJS</b> ❤️
            </Typography>
          </Column>
        </Row>
      </Container>
    </div>
  );
});

export default IndexPage;
