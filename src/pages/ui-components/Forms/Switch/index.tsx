import * as React from 'react';

import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import withForm, { WithFormProps } from '../Form/withForm';

export interface SwitchProps
  extends StyledProp,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'>,
    WithFormProps<never> {
  children?: string;
  onChange?: (checked: boolean) => void;
  value?: boolean;
  disabled?: boolean;
  errorMessage?: string;
}

const WIDTH_IN_PX = 40;
const HEIGHT_IN_PX = 24;

const THUMB_WIDTH_IN_PX = 16;
const THUMB_HEIGHT_IN_PX = 16;
const THUMB_OFFSET_IN_REM = 1;

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ children, className, onChange, disabled, value, id: idProp, errorMessage, ...rest }, ref) => {
    const handleChange = React.useCallback(() => {
      onChange && onChange(!value);
    }, [onChange, value]);

    const [id] = React.useState(idProp ?? `hst-switch-id-${Math.floor(Math.random() * 1000)}`);

    return (
      <div className={cx(className, { 'hst-switch-disabled': disabled })}>
        <button
          id={id}
          role='switch'
          className={cx('hst-switch-button', { 'hst-switch-error': !!errorMessage })}
          onClick={handleChange}
          disabled={disabled}
          aria-disabled={disabled}
          aria-checked={value}
          ref={ref}
          {...rest}
        >
          <div
            tabIndex={0}
            className={cx('hst-switch-track', {
              'hst-switch-checked': value,
              'hst-switch-error': !!errorMessage
            })}
          >
            <span className={cx('hst-switch-thumb', { 'hst-switch-checked': value })} />
          </div>
        </button>

        <div className='hst-switch-label'>
          {children && <label htmlFor={id}>{children}</label>}
          {!!errorMessage && <div className='hst-switch-error-message'>{errorMessage}</div>}
        </div>
      </div>
    );
  }
);

/**
 * @deprecated Use Switch from Antd
 */
export default styled(withForm(Switch), { label: 'hst-switch' })(({ theme }) => {
  return css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.inline.nano};
    cursor: pointer;
    line-height: ${theme.line.height.lg};

    &.hst-switch-disabled {
      opacity: ${theme.opacity.level[6]};
      cursor: not-allowed;
    }

    .hst-switch-error-message {
      font-size: ${theme.font.size.xxs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      color: ${theme.hexToRgba(theme.feedbackColor.negative.pure)};
    }

    .hst-switch-button {
      all: unset;
      margin-bottom: auto;

      :disabled {
        pointer-events: none;
      }
    }

    .hst-switch-label {
      label {
        all: unset;
        color: ${theme.neutralColor.low.pure};
        font-family: ${theme.font.family.base};
        font-size: ${theme.font.size.xs};
        font-weight: ${theme.font.weight.regular};
        line-height: ${theme.line.height.default};
        user-select: none;
      }
    }

    .hst-switch-track {
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

      &.hst-switch-checked {
        background-color: ${theme.brandColor.primary.pure};
      }

      &.hst-switch-error {
        background-color: ${theme.hexToRgba(theme.feedbackColor.negative.pure)};
      }

      .hst-switch-thumb {
        width: ${theme.pxToRem(THUMB_WIDTH_IN_PX)}rem;
        height: ${theme.pxToRem(THUMB_HEIGHT_IN_PX)}rem;
        background-color: ${theme.neutralColor.high.pure};
        border-radius: ${theme.border.radius.pill};
        position: absolute;
        transition: all 0.2s;
        left: ${theme.spacing.quarck};

        &.hst-switch-checked {
          transform: translateX(${THUMB_OFFSET_IN_REM}rem);
        }
      }
    }
  `;
});
