import * as React from 'react';

import CardMUI, { CardProps } from '@material-ui/core/Card';
import CardActionsMUI from '@material-ui/core/CardActions';
import CardContentMUI from '@material-ui/core/CardContent';
import CardHeaderMUI from '@material-ui/core/CardHeader';
import ModalMUI from '@material-ui/core/Modal';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import { getReactChildrenComponent, isReactComponent } from '../Helpers/functions';
import { useFirstChildrenProps } from '../hooks/useChildrenProps';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import ShowcaseContextProvider from './context';
import { IShowcaseComponent, IShowcaseProps, IShowcaseStep } from './interfaces';
import CallToActions from './internals/CallToActions';
import Steps from './internals/Steps';
import ShowcaseButton, { IShowcaseButtonProps } from './ShowcaseButton';
import ShowcaseImage, { IShowcaseImageProps } from './ShowcaseImage';
import ShowcaseStep from './ShowcaseStep';
import ShowcaseText, { IShowcaseTextProps } from './ShowcaseText';
import ShowcaseTitle, { IShowcaseTitleProps } from './ShowcaseTitle';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      boxShadow: 'none',

      '& .header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 24px 0',

        '& .mui-header': {
          padding: 0,
          '& span': {
            color: '#546E7A',
            fontSize: 16,
            fontWeight: 600
          }
        }
      },

      '& .content': {
        padding: '16px 24px 0',
        overflow: 'auto',
        height: 528
      },

      '& .actions': {
        width: '100%',
        padding: 0,
        position: 'fixed',
        bottom: 0,
        background: '#fff'
      }
    },
    modal: {
      width: 530,
      position: 'fixed',
      top: '50%',
      left: '50%',
      background: 'white',
      borderRadius: 4,
      transform: 'translate(-50%, -50%)',
      maxHeight: '75vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  })
);

const Showcase = React.forwardRef<CardProps, IShowcaseProps>((props, ref) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const { id, className, children } = props;

  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const title = useFirstChildrenProps<IShowcaseTitleProps>(children, ShowcaseTitle);
  const button = useFirstChildrenProps<IShowcaseButtonProps>(children, ShowcaseButton);

  const steps: IShowcaseStep[] = React.useMemo(() => {
    return React.Children.map(children, (child: React.ReactElement) => {
      if (!isReactComponent(child, ShowcaseStep)) return;

      const images = getReactChildrenComponent(child?.props?.children, ShowcaseImage).reduce((acc, child) => {
        return [...acc, child.props];
      }, [] as IShowcaseImageProps[]);

      const text = getReactChildrenComponent(child?.props?.children, ShowcaseText).reduce((acc, child) => {
        return [...acc, child.props];
      }, [] as IShowcaseTextProps[]);

      return { ...child.props, images, text };
    });
  }, [children]);

  const contextValue = React.useMemo(
    () => ({
      steps,
      button,
      currentStep,
      setCurrentStep
    }),
    [steps, button, currentStep, setCurrentStep]
  );

  return (
    <WrapperTheme>
      <ModalMUI
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <ShowcaseContextProvider value={contextValue}>
          <div className={classes.modal}>
            <CardMUI id={id} ref={ref} className={clsx(className, classes.root)}>
              <div className='header'>
                <CardHeaderMUI className='mui-header' title={title.children} />
                <span>
                  {currentStep + 1}/{steps.length}
                </span>
              </div>
              <CardContentMUI className='content'>
                <Steps />
              </CardContentMUI>
              <CardActionsMUI disableSpacing className='actions'>
                <CallToActions />
              </CardActionsMUI>
            </CardMUI>
          </div>
        </ShowcaseContextProvider>
      </ModalMUI>
    </WrapperTheme>
  );
}) as IShowcaseComponent;

Showcase.Title = ShowcaseTitle;
Showcase.Step = ShowcaseStep;
Showcase.Image = ShowcaseImage;
Showcase.Text = ShowcaseText;
Showcase.Button = ShowcaseButton;

export default Showcase;
