import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import BeltIcon from '@eduzz/houston-icons/Belt';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Typography from '../../../Typography';
import TopbarContext from '../context';

const supportedBelts = ['white', 'red', 'orange', 'green', 'black', 'golden'];

const Belt = React.memo<StyledProp>(({ className }) => {
  const belt = useContextSelector(TopbarContext, context => context.user?.belt);

  const [beltColor, setBeltColor] = React.useState('');
  const [beltClass, setBeltClass] = React.useState('');

  React.useEffect(() => {
    if (!belt) {
      setBeltColor('');
      setBeltClass('');
      return;
    }

    const nameBeltClass = belt.toString().toLowerCase().split(' ')[0];

    const classBelt = supportedBelts.includes(nameBeltClass)
      ? nameBeltClass
      : nameBeltClass === 'sensei'
      ? 'black'
      : 'white';

    setBeltColor(belt);
    setBeltClass(classBelt);
  }, [belt]);

  if (!beltColor) {
    return null;
  }

  return (
    <div className={cx(className, `--${beltClass}`)}>
      <div className='houston-topbar-belt__badge'>
        <BeltIcon size={25} className='houston-topbar-belt__icon' />
        <Typography color='inherit' className='houston-topbar-belt__text'>
          {beltColor}
        </Typography>
      </div>
    </div>
  );
});

export default styled(Belt, { label: 'houston-topbar-belt' })(
  ({ theme }) => css`
    color: white;
    display: flex;
    align-items: center;
    padding: ${theme.spacing.squish.xxs};
    border-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: ${theme.spacing.inline.xxs};
    height: ${theme.pxToRem(32)}rem;

    ${theme.breakpoints.down('md')} {
      display: none;
    }

    ${theme.breakpoints.down('lg')} {
      & .houston-topbar-belt__text {
        display: none;
      }
    }

    &.none {
      display: none;
    }

    &.--white {
      background-color: ${theme.beltColor.white};
      color: ${theme.beltColor.white};
    }

    &.--red {
      background-color: ${theme.beltColor.red};
      color: ${theme.beltColor.red};
    }

    &.--orange {
      background-color: ${theme.beltColor.orange};
      color: ${theme.beltColor.orange};
    }

    &.--green {
      background-color: ${theme.beltColor.green};
      color: ${theme.beltColor.green};
    }

    &.--black {
      background-color: ${theme.beltColor.black};
      color: ${theme.beltColor.black};
    }

    &.--golden {
      background-color: ${theme.beltColor.golden};
      color: ${theme.beltColor.golden};
    }

    .houston-topbar-belt__badge {
      color: white;
      display: flex;
      align-items: center;

      & > .houston-topbar-belt__text {
        white-space: nowrap;
        text-transform: uppercase;
        font-style: italic;
        margin-left: ${theme.spacing.nano};
      }
    }

    .houston-topbar-belt__icon {
      min-width: 32px;
      display: flex;
      align-items: center;
    }
  `
);
