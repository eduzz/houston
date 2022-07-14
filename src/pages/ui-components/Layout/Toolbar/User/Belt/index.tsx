import * as React from 'react';

import BeltIcon from '@eduzz/houston-icons/Belt';
import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

const supportedBelts = ['white', 'red', 'orange', 'green', 'black', 'golden'];

export interface BeltProps extends IStyledProp {
  belt: string | undefined;
}

const Belt = React.memo<BeltProps>(({ className, belt }) => {
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
      <div className='houston-toolbar-belt__badge'>
        <BeltIcon size={25} className='houston-toolbar-belt__icon' />
        <span className='houston-toolbar-belt__text'>{beltColor}</span>
      </div>
    </div>
  );
});

export default styled(Belt, { label: 'houston-toolbar-belt' })(
  ({ theme }) => css`
    color: white;
    display: flex;
    align-items: center;
    padding: ${theme.spacing.quarck} ${theme.spacing.xxxs};
    border-radius: 20px;
    margin: 0 ${theme.spacing.nano};

    ${theme.breakpoints.down('md')} {
      display: none;
    }

    &.none {
      display: none;
    }

    &.--white {
      background-color: ${theme.beltColor.white};
      color: ${theme.beltColor.white};

      & > .houston-toolbar-belt__badge {
        color: ${theme.beltColor.whiteForeground};

        & > svg > path,
        & > svg > circle {
          fill: ${theme.beltColor.whiteForeground};
        }
      }
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

    .houston-toolbar-belt__badge {
      color: white;
      display: flex;
      align-items: center;

      & > .houston-toolbar-belt__text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
        font-size: 14px;
        margin-left: 4px;

        ${theme.breakpoints.down('md')} {
          max-width: 75px;
        }

        ${theme.breakpoints.down('sm')} {
          display: none;
        }
      }
    }

    .houston-toolbar-belt__icon {
      min-width: 32px;
      display: flex;
      align-items: center;
    }
  `
);
