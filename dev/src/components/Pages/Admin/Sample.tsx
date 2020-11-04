import React, { Fragment, memo, useCallback, useState } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import Toolbar from 'components/Layout/Toolbar';
import ToolbarTabs from 'components/Layout/ToolbarTabs';
import ImageSelector, { IImageSelectorResult } from 'components/Shared/ImageSelector';

const useStyle = makeStyles(theme => ({
  img: {
    maxWidth: '100%',
    margin: 'auto',
    display: 'block',
    padding: 5,
    boxShadow: theme.shadows['5']
  },
  cardActions: {
    justifyContent: 'flex-end'
  }
}));

const SamplePage = memo((props: {}) => {
  const classes = useStyle(props);
  const [selectorOpened, setSelectorOpened] = useState(false);
  const [image, setImage] = useState('');

  const openSelector = useCallback(() => setSelectorOpened(true), []);
  const onSelectorComplete = useCallback((image: IImageSelectorResult) => {
    setImage(image?.base64);
    setSelectorOpened(false);
  }, []);

  return (
    <Fragment>
      <ImageSelector opened={selectorOpened} width={500} height={500} onComplete={onSelectorComplete} />

      <Toolbar title='Extra' />
      <ToolbarTabs>
        <Tabs value={0} color='primary'>
          <Tab label='Image Cropper' />
          <Tab label='Nothing' />
        </Tabs>
      </ToolbarTabs>

      <Card>
        <CardContent>
          <Typography variant='subtitle1' gutterBottom>
            Image Cropper + Compressor
          </Typography>
          {!!image && <img className={classes.img} src={image} alt='base64' />}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button onClick={openSelector} variant='contained' color='primary'>
            Selecionar
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
});
export default SamplePage;
