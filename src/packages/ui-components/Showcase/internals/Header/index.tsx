import * as React from 'react';

import { Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CancelIcon from '@eduzz/houston-icons/Cancel';

import ButtonIcon from '../../../ButtonIcon';
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

    '& .close-icon': {
      color: '#546E7A',
      cursor: 'pointer'
    }
  }
}));

const Header = React.memo(() => {
  const { currentStep, title, stepCounter, steps, size, handleClose } = useShowcaseContext();

  const classes = useStyles();
  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('xs'));

  if (!title) return null;

  return (
    <Typography className={classes.header}>
      <span className='header-title'>{title.children}</span>
      {size !== 'small' && !isMobile && stepCounter && (
        <span>
          {currentStep}/{steps.length}
        </span>
      )}

      {(size === 'small' || isMobile) && (
        <ButtonIcon id='modal-default-close' onClick={handleClose} size='small'>
          <CancelIcon className='close-icon' size={18} />
        </ButtonIcon>
      )}
    </Typography>
  );
});

export default Header;
