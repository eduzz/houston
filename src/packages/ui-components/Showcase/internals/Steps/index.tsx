import * as React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';

const Steps = () => {
  const [margin, setMargin] = React.useState(0);

  const { steps, currentStep, breakpoint, modalSizes, imageSizes } = useShowcaseContext();

  const useStyles = makeStyles(theme =>
    createStyles({
      root: {
        overflow: 'hidden',

        '& .steps': {
          display: 'flex',
          marginLeft: margin,
          transition: 'ease margin 1s'
        }
      },

      stepContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 0 96px 0',
        padding: '16px 24px',

        [theme.breakpoints.down('xs')]: {
          padding: '12px 16px'
        },

        '& .content-text': {
          alignSelf: 'baseline',
          fontWeight: 400,
          fontSize: 16,
          textAlign: 'left',
          margin: 0,
          lineHeight: '24px',
          letterSpacing: '0.3px',
          maxHeight: '29vh',
          overflow: 'auto'
        }
      },

      contentImage: {
        width: imageSizes.large,
        marginBottom: 24,
        display: 'flex',
        justifyContent: 'center',

        [theme.breakpoints.down('md')]: {
          width: imageSizes.medium
        },

        [theme.breakpoints.down('xs')]: {
          width: imageSizes.small
        },

        '& img': {
          maxWidth: '100%',
          borderRadius: 4
        }
      },

      mobilePadding: {
        padding: '12px 16px'
      },

      small: {
        width: imageSizes.small
      },

      medium: {
        width: imageSizes.medium
      }
    })
  );

  const classes = useStyles();

  React.useEffect(() => {
    setMargin((currentStep - 1) * -modalSizes[breakpoint]);
  }, [currentStep, setMargin, breakpoint, modalSizes]);

  return (
    <div className={classes.root}>
      <div className='steps'>
        {steps.map((step, key) => {
          const { images, text } = step || { images: null, text: null };

          return (
            <div key={key} className={clsx({ [classes.mobilePadding]: breakpoint === 'small' }, classes.stepContent)}>
              <div
                className={clsx(
                  { [classes.small]: breakpoint === 'small', [classes.medium]: breakpoint === 'medium' },
                  classes.contentImage
                )}
              >
                <img src={images?.src} alt={images.alt} />
              </div>
              <Typography className='content-text'>{text?.children}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
