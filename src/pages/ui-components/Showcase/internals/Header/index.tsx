import * as React from 'react';

import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import CancelIcon from '@eduzz/houston-icons/Cancel';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

import IconButton from '../../../IconButton';
import Typography from '../../../Typography';
import { useShowcaseContext } from '../../context';

interface StyleProps {
  size?: 'small' | 'medium' | 'large';
}

const useStyles = createUseStyles(theme => ({
  header: (props: StyleProps) => ({
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'flex-end',
    'padding': props?.size === 'small' ? '16px 16px 0' : '24px 24px 0',

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

    '& .close-icon': {
      color: '#546E7A',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  })
}));

const Header = React.memo(() => {
  const { currentStep, title, stepCounter, steps, size, handleClose } = useShowcaseContext();

  const classes = useStyles({ size });
  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('xs'));

  if (!title) return null;

  return (
    <Typography className={classes.header} size='xs'>
      <span className='header-title'>{title.children}</span>
      {size !== 'small' && !isMobile && stepCounter && (
        <span>
          {currentStep}/{steps.length}
        </span>
      )}

      {(size === 'small' || isMobile) && (
        <IconButton id='modal-default-close' onClick={handleClose} size='small'>
          <CancelIcon className='close-icon' size='md' />
        </IconButton>
      )}
    </Typography>
  );
});

export default Header;
