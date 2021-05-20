import * as React from 'react';

import ButtonMUI from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { useShowcaseContext } from '../../context';

const useStyles = makeStyles(() =>
  createStyles({
    ctas: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '32px 24px 24px',

      '& button': {
        height: 'auto',
        padding: '9.5px 24px'
      },

      '& .close-button': {
        display: 'flex',
        justifyContent: 'flex-start',

        '& span': {
          display: 'flex',
          justifyContent: 'flex-start'
        }
      },

      '& .standard-buttons': {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }
  })
);

const CallToActions = () => {
  const classes = useStyles();

  const { steps, button, currentStep } = useShowcaseContext();

  const { children, callback } = button || { children: (() => <>Ok, entendi.</>)(), callback: () => null };

  if (steps.length === 1) {
    return (
      <div className={classes.ctas}>
        <div className='standard-buttons'>
          <ButtonMUI variant='contained' color='primary' onClick={() => callback()}>
            {children}
          </ButtonMUI>
        </div>
      </div>
    );
  }

  if (currentStep === steps.length - 1) {
    return (
      <div className={classes.ctas}>
        <div className='standard-buttons'>
          <ButtonMUI>Anterior</ButtonMUI>
          <ButtonMUI variant='contained' color='primary' onClick={() => callback()}>
            {children}
          </ButtonMUI>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.ctas}>
      <div className='close-button'>
        <ButtonMUI>Fechar</ButtonMUI>
      </div>
      <div className='standard-buttons'>
        <ButtonMUI>Anterior</ButtonMUI>
        <ButtonMUI variant='contained' color='primary'>
          Próximo
        </ButtonMUI>
      </div>
    </div>
  );
};

export default CallToActions;
