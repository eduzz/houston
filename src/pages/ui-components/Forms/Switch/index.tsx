import * as React from 'react';

import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

export interface SwitchProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children?: string;
}

const Switch = ({ children, className, ...rest }: SwitchProps) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <div
      className={className}
      onClick={() => {
        setSelected(prev => !prev);
      }}
    >
      <input className='hst_input' {...rest} />
      <div className={cx('hst_switch_track', { '--selected': selected })}>
        <div className={cx('hst_switch_thumb', { '--selected': selected })} />
      </div>
      {children && <label>{children}</label>}
    </div>
  );
};

const WIDTH_IN_PX = 40;
const HEIGHT_IN_PX = 24;

const THUMB_WIDTH_IN_PX = 16;
const THUMB_HEIGHT_IN_PX = 16;

const THUMB_OFFSET_IN_REM = 1;

export default styled(Switch, { label: 'hst-switch' })(({ theme }) => {
  return css`
    display: inline-flex;
    color: red;

    .hst_input {
      display: none;
    }

    .hst_switch_track {
      width: ${theme.pxToRem(WIDTH_IN_PX)}rem;
      height: ${theme.pxToRem(HEIGHT_IN_PX)}rem;
      background-color: ${theme.neutralColor.low.light};
      border-radius: ${theme.border.radius.pill};
      display: flex;
      align-items: center;
      position: relative;
      transition: all 0.2s;

      &.--selected {
        background-color: ${theme.brandColor.primary.pure};
      }

      .hst_switch_thumb {
        width: ${theme.pxToRem(THUMB_WIDTH_IN_PX)}rem;
        height: ${theme.pxToRem(THUMB_HEIGHT_IN_PX)}rem;
        background-color: ${theme.neutralColor.high.pure};
        border-radius: ${theme.border.radius.pill};
        position: absolute;
        transition: all 0.2s;
        left: ${theme.spacing.quarck};

        &.--selected {
          transform: translateX(${THUMB_OFFSET_IN_REM}rem);
        }
      }
    }
  `;
});
