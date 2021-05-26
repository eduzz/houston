import * as React from 'react';

import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';

const Steps = () => {
  const [margin, setMargin] = React.useState(0);

  const { steps, currentStep, size } = useShowcaseContext();

  const widthSizes = {
    small: 248,
    medium: 420
  };

  const heightSizes = {
    small: 222,
    medium: 346
  };

  const lineClamps = {
    small: 6,
    medium: 4
  };

  const useStyles = makeStyles(theme =>
    createStyles({
      root: {
        overflow: 'hidden',

        '& .steps': {
          display: 'flex',
          marginLeft: margin,
          transition: 'ease margin 1s',

          '& .step-content': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 20px 96px 0',

            '& .content-image': {
              [theme.breakpoints.up('xs')]: {
                width: 248,
                height: 222
              },

              [theme.breakpoints.up('sm')]: {
                width: size === 'small' ? widthSizes[size] : 420,
                height: size === 'small' ? heightSizes[size] : 346
              },

              [theme.breakpoints.up('md')]: {
                width: size === 'small' || size === 'medium' ? widthSizes[size] : 482,
                height: size === 'small' || size === 'medium' ? heightSizes[size] : 370
              },
              width: 482,
              borderRadius: 4,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginBottom: 24
            },

            '& .content-text': {
              [theme.breakpoints.up('xs')]: {
                WebkitLineClamp: 6
              },

              [theme.breakpoints.up('sm')]: {
                WebkitLineClamp: size === 'small' ? lineClamps[size] : 4
              },

              [theme.breakpoints.up('md')]: {
                WebkitLineClamp: size === 'small' || size === 'medium' ? lineClamps[size] : 3
              },
              alignSelf: 'baseline',
              fontWeight: 400,
              fontSize: 16,
              textAlign: 'left',
              margin: 0,
              lineHeight: '24px',
              letterSpacing: '0.3px',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }
          }
        }
      }
    })
  );

  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery<Theme>(theme.breakpoints.down('xs'));
  const md = useMediaQuery<Theme>(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if (sm || size === 'small') {
      setMargin((currentStep - 1) * -268);
      return;
    }

    if (md || size === 'medium') {
      setMargin((currentStep - 1) * -440);
      return;
    }

    setMargin((currentStep - 1) * -502);
  }, [currentStep, setMargin, sm, md, size]);

  return (
    <div className={classes.root}>
      <div className='steps'>
        {steps.map((step, key) => {
          const { images, text } = step || { images: null, text: null };

          return (
            <div key={key} className='step-content'>
              <div className='content-image' style={{ backgroundImage: `url(${images?.src})` }} />
              <Typography className='content-text'>{text?.children}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
