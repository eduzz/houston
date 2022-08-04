import * as React from 'react';

import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import withForm, { WithFormProps } from '../Form/withForm';

export interface SwitchProps
  extends StyledProp,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>,
    WithFormProps<never> {
  children?: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ children, className, onChange, checked: checkedProp, value, ...rest }, ref) => {
    const handleChange = React.useCallback(() => {
      if (checkedProp !== undefined) {
        onChange && onChange(!checkedProp);
        return;
      }
      onChange && onChange(!value);
    }, [onChange, value, checkedProp]);

    return (
      <button role='switch' className={className} onClick={handleChange} ref={ref} {...rest}>
        <div
          tabIndex={0}
          className={cx('hst_switch_track', { '--checked': checkedProp ?? (value as unknown as boolean) })}
        >
          <span className={cx('hst_switch_thumb', { '--checked': checkedProp ?? (value as unknown as boolean) })} />
        </div>
        {children && <label>{children}</label>}
      </button>
    );
  }
);

const WIDTH_IN_PX = 40;
const HEIGHT_IN_PX = 24;

const THUMB_WIDTH_IN_PX = 16;
const THUMB_HEIGHT_IN_PX = 16;
const THUMB_OFFSET_IN_REM = 1;

export default styled(withForm(React.memo(Switch)), { label: 'hst-switch' })(({ theme }) => {
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

      &.--checked {
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

        &.--checked {
          transform: translateX(${THUMB_OFFSET_IN_REM}rem);
        }
      }
    }
  `;
});
