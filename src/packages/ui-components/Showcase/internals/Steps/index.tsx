import * as React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { useShowcaseContext } from '../../context';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      overflow: 'hidden'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 20px 0 0',

      '& .image': {
        width: 482,
        height: 370,
        borderRadius: 4,
        maxWidth: 580,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: 24
      },

      '& p': {
        alignSelf: 'baseline',
        fontWeight: 400,
        fontSize: 16,
        textAlign: 'left',
        margin: 0,
        lineHeight: '24px'
      }
    }
  })
);

const Steps = () => {
  const classes = useStyles();

  const { steps } = useShowcaseContext();

  return (
    <div className={classes.root}>
      {steps.map((step, key) => {
        const { images, text } = step || { images: null, text: null };

        return (
          <div key={key} className={classes.content}>
            <div className='image' style={{ backgroundImage: `url(${images[0]?.src})` }} />
            <p>{text[0]?.children}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
