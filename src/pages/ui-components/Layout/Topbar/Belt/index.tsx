import * as React from 'react';

import { Typography } from 'antd';

import { useContextSelector } from 'use-context-selector';

import BeltIcon from '../../../Icons/Belt';
import styled, { css, cx, StyledProp } from '../../../styled';
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
    <div className={cx(className, `hst-topbar-belt-color-${beltClass}`)}>
      <div className='hst-topbar-belt-badge'>
        <BeltIcon size={25} className='hst-topbar-belt-icon' />
        <Typography className='hst-topbar-belt-text'>{beltColor}</Typography>
      </div>
    </div>
  );
});

export default styled(Belt, { label: 'hst-topbar-belt' })(
  ({ theme }) => css`
    color: white;
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 16px;
    border-radius: 16px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 1.5rem;
    height: ${theme.pxToRem(32)}rem;

    ${theme.mediaQuery.down('md')} {
      display: none;
    }

    ${theme.mediaQuery.down('lg')} {
      padding: 8px 10px 8px 10px;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;

      & .hst-topbar-belt-text {
        display: none;
      }
    }

    &.none {
      display: none;
    }

    &.hst-topbar-belt-color-white {
      background-color: ${theme.beltColor.white};
      color: ${theme.beltColor.white};

      .hst-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.white ?? 'black'};
      }
    }

    &.hst-topbar-belt-color-red {
      background-color: ${theme.beltColor.red};
      color: ${theme.beltColor.red};

      .hst-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.red ?? 'white'};
      }
    }

    &.hst-topbar-belt-color-orange {
      background-color: ${theme.beltColor.orange};
      color: ${theme.beltColor.orange};

      .hst-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.orange ?? 'white'};
      }
    }

    &.hst-topbar-belt-color-green {
      background-color: ${theme.beltColor.green};
      color: ${theme.beltColor.green};

      .hst-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.green ?? 'white'};
      }
    }

    &.hst-topbar-belt-color-black {
      background-color: ${theme.beltColor.black};
      color: ${theme.beltColor.black};

      .hst-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.black ?? 'white'};
      }
    }

    &.hst-topbar-belt-color-golden {
      background-color: ${theme.beltColor.golden};
      color: ${theme.beltColor.golden};

      .hst-topbar-belt-badge {
        color: ${theme.beltForegroundColor?.golden ?? 'white'};
      }
    }

    .hst-topbar-belt-badge {
      display: flex;
      align-items: center;

      & > .hst-topbar-belt-text {
        color: inherit;
        white-space: nowrap;
        text-transform: uppercase;
        font-style: italic;
        font-size: 14px;
        margin-left: 0.25rem;
      }
    }

    .hst-topbar-belt-icon {
      min-width: ${theme.pxToRem(32)}rem;
      display: flex;
      align-items: center;
    }
  `
);
