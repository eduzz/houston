import * as React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: '24px 24px 0',
      fontSize: 16,

      '& .header-title': {
        color: '#6C7E86',
        fontWeight: 600,
        letterSpacing: '0.4px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },

      '& .close': {
        marginLeft: 12,
        fontSize: 18,
        color: '#546E7A',
        cursor: 'pointer'
      }
    }
  })
);

const Header = () => {
  const { currentStep, title, stepCounter, steps, isMobile, handleClose } = useShowcaseContext();

  const classes = useStyles();

  return (
    <Typography className={classes.header}>
      <span className='header-title'>{title.children} </span>
      {!isMobile && stepCounter && (
        <span>
          {currentStep}/{steps.length}
        </span>
      )}

      {isMobile && (
        <span className='close' id='modal-default-close' onClick={() => handleClose()}>
          x
        </span>
      )}
    </Typography>
  );
};

export default Header;
