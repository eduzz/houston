import * as React from 'react';

import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

export interface SwitchProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(({ children, className, ...rest }, ref) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <button
      ref={ref}
      role='switch'
      className={className}
      onClick={() => {
        setSelected(prev => !prev);
      }}
    >
      <input className='hst_input' {...rest} />
      <div tabIndex={0} className={cx('hst_switch_track', { '--selected': selected })}>
        <div className={cx('hst_switch_thumb', { '--selected': selected })} />
      </div>
      {children && <label>{children}</label>}
    </button>
  );
});

const WIDTH_IN_PX = 40;
const HEIGHT_IN_PX = 24;

const THUMB_WIDTH_IN_PX = 16;
const THUMB_HEIGHT_IN_PX = 16;

const THUMB_OFFSET_IN_REM = 1;

export default styled(Switch, { label: 'hst-switch' })(({ theme }) => {
  return css`
    all: unset;
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.inline.nano};

    label {
      color: ${theme.neutralColor.low.pure};
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.size.xs};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
    }

    .hst_input {
      display: none;
    }

    .hst_switch_track {
      width: ${theme.pxToRem(WIDTH_IN_PX)}rem;
      height: ${theme.pxToRem(HEIGHT_IN_PX)}rem;
      background-color: ${theme.hexToRgba(theme.neutralColor.low.light, theme.opacity.level[8])};
      border-radius: ${theme.border.radius.pill};
      display: flex;
      align-items: center;
      position: relative;
      transition-duration: 0.5s;
      transition-property: background-color, color;

      :hover {
        background-color: ${theme.neutralColor.low.light};
      }

      :focus {
        background-color: ${theme.neutralColor.low.light};
        outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
      }

      &.--disabled {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        opacity: ${theme.opacity.level[6]};
        pointer-events: none;
      }

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
