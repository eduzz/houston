import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '24px 24px 0',
    fontSize: 16,

    [theme.breakpoints.down('xs')]: {
      padding: '12px 16px 0'
    },

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
}));

const Header = () => {
  const { currentStep, title, stepCounter, steps, breakpoint, handleClose } = useShowcaseContext();

  const classes = useStyles();

  return (
    <Typography className={classes.header}>
      <span className='header-title'>{title.children}</span>

      {breakpoint !== 'small' && stepCounter && (
        <span>
          {currentStep}/{steps.length}
        </span>
      )}

      {breakpoint === 'small' && (
        <span className='close' id='modal-default-close' onClick={() => handleClose()}>
          x
        </span>
      )}
    </Typography>
  );
};

export default Header;
