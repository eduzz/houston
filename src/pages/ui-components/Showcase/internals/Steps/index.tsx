import * as React from 'react';

import { cx } from '@eduzz/houston-styles';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';

interface IWidthSizes {
  large: number;
  medium: number;
  small: number;
}

interface IStyleProps {
  margin: number;
  imageSizes: IWidthSizes;
  modalSizes: IWidthSizes;
  size: 'small' | 'medium' | 'large';
}

const useStyles = createUseStyles(theme => ({
  root: ({ margin, modalSizes, size }: IStyleProps) => ({
    overflow: 'hidden',

    '& .steps': {
      display: 'flex',
      marginLeft: margin * -modalSizes[size ?? 'large'],
      transition: 'ease margin 1s',

      [theme.breakpoints.down('lg')]: {
        marginLeft: margin * -modalSizes[size ?? 'medium']
      },

      [theme.breakpoints.down('sm')]: {
        marginLeft: margin * -modalSizes[size ?? 'small']
      }
    }
  }),

  stepContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 24px',

    [theme.breakpoints.down('sm')]: {
      padding: '12px 16px'
    }
  },

  contentImage: (props: IStyleProps) => ({
    width: props.imageSizes.large,
    marginBottom: 24,
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('lg')]: {
      width: props.imageSizes.medium
    },

    [theme.breakpoints.down('sm')]: {
      width: props.imageSizes.small
    },

    '& img': {
      maxWidth: '100%',
      borderRadius: 4
    }
  }),

  contentText: ({ imageSizes }: IStyleProps) => ({
    width: imageSizes.large,
    alignSelf: 'baseline',
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'left',
    margin: 0,
    lineHeight: '24px',
    letterSpacing: '0.3px',
    maxHeight: '29vh',
    overflow: 'auto',

    [theme.breakpoints.down('md')]: {
      width: imageSizes.medium
    },

    [theme.breakpoints.down('xs')]: {
      width: imageSizes.small
    }
  }),

  mobilePadding: {
    padding: '12px 16px'
  },

  small: (props: IStyleProps) => ({
    width: props.imageSizes.small
  }),

  medium: (props: IStyleProps) => ({
    width: props.imageSizes.medium
  })
}));

const Steps = React.memo(() => {
  const [margin, setMargin] = React.useState(0);

  const { steps, currentStep, size, modalSizes, imageSizes } = useShowcaseContext();
  const classes = useStyles({ margin, imageSizes, modalSizes, size });

  React.useEffect(() => {
    setMargin(currentStep - 1);
  }, [currentStep, setMargin, size, modalSizes]);

  return (
    <div className={classes.root}>
      <div className='steps'>
        {steps.map((step, key) => {
          const { image, text } = step;

          return (
            <div key={key} className={cx(size === 'small' && classes.mobilePadding, classes.stepContent)}>
              {image && (
                <div
                  className={cx(
                    size === 'small' && classes.small,
                    size === 'medium' && classes.medium,
                    classes.contentImage
                  )}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              )}
              <Typography className={cx(size === 'small' && classes.small, classes.contentText)}>
                {text?.children}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Steps;
