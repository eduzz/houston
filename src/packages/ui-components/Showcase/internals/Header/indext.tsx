import * as React from 'react';

import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import createUseStyles from '../../../styles/createUseStyles';
import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';

const useStyles = createUseStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '24px 24px 0',
    fontSize: 16,

    [theme.breakpoints.down('sm')]: {
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

const Header = React.memo(() => {
  const { currentStep, title, stepCounter, steps, size, handleClose } = useShowcaseContext();

  const classes = useStyles();
  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));

  if (!title) return null;

  return (
    <Typography className={classes.header}>
      <span className='header-title'>{title.children} </span>
      {size !== 'small' && !isMobile && stepCounter && (
        <span>
          {currentStep}/{steps.length}
        </span>
      )}

      {(size === 'small' || isMobile) && (
        <span className='close' id='modal-default-close' onClick={() => handleClose()}>
          x
        </span>
      )}
    </Typography>
  );
});

export default Header;
