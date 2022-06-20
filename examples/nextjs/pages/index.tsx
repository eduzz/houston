import React, { memo } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import Button from '@eduzz/houston-ui/Button';
import Column from '@eduzz/houston-ui/Grid/Column';
import Container from '@eduzz/houston-ui/Grid/Container';
import Row from '@eduzz/houston-ui/Grid/Row';
import Typography from '@eduzz/houston-ui/Typography';

const IndexPage: NextPage = memo(() => {
  return (
    <div className='app'>
      <Container layout='fluid'>
        <Row alignItems='center' justify='center'>
          <Column xs={12}>
            <div className='logo'>
              <Image src='/images/logo.svg' alt='Logo' width={400} height={180} />
            </div>
          </Column>

          <Column md={12}>
            <Typography size='medium'>
              Houston with <b>NextJS</b> ❤️
            </Typography>

            <br />

            <Button>Docs</Button>
          </Column>
        </Row>
      </Container>
    </div>
  );
});

export default IndexPage;
