import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

import List from '@eduzz/houston-ui/List';

import Toolbar from 'components/Layout/Toolbar';

const ListPage = memo(() => {
  return (
    <Fragment>
      <Toolbar title='Buttons' />

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h4'>
            Variants
          </Typography>
        </CardContent>

        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom variant='h6'>
                Simple List
              </Typography>

              <List stripedRows>
                <List.Item>
                  <List.Title>List Item Title</List.Title>
                </List.Item>
                <List.Item>
                  <List.Title>List Item Title</List.Title>
                </List.Item>
                <List.Item>
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                </List.Item>
                <List.Item>
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                </List.Item>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom variant='h6'>
                Left Icon
              </Typography>
              <List stripedRows>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                </List.Item>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom variant='h6'>
                Right Icon
              </Typography>
              <List stripedRows>
                <List.Item>
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
              </List>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom variant='h6'>
                Two Icons
              </Typography>
              <List stripedRows>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom variant='h6'>
                Icon and Text
              </Typography>
              <List stripedRows>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right text='Miguel' />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right text='Miguel' />
                </List.Item>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom variant='h6'>
                Avatar or Image
              </Typography>
              <List stripedRows>
                <List.Item>
                  <List.Left image={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Left image={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} />
                </List.Item>
                <List.Item>
                  <List.Left image='https://i.pravatar.cc/40' />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right text='Miguel' />
                </List.Item>
                <List.Item>
                  <List.Left image='https://i.pravatar.cc/40' />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right text='Miguel' />
                </List.Item>
              </List>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom variant='h6'>
                Icon and Text clickable
              </Typography>
              <List stripedRows>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} onClick={() => alert('Icon clicked')} />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Right icon={<EditOutlinedIcon />} onClick={() => alert('Icon clicked')} />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right text='Miguel' onClick={() => alert('Text clicked')} />
                </List.Item>
                <List.Item>
                  <List.Left icon={<SentimentSatisfiedIcon />} />
                  <List.Title>List Item Title</List.Title>
                  <List.Subtitle>List Item Subtitle</List.Subtitle>
                  <List.Right text='Miguel' onClick={() => alert('Text clicked')} />
                </List.Item>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default ListPage;
