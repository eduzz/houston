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
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ children, className, onChange, disabled, value, id: idProp, errorMessage, ...rest }, ref) => {
    const handleChange = React.useCallback(() => {
      onChange && onChange(!value);
    }, [onChange, value]);

    const [id] = React.useState(idProp ?? `hst-switch-id-${Math.floor(Math.random() * 1000)}`);

    return (
      <div className={cx(className, { '--disabled': disabled })}>
        <button
          id={id}
          role='switch'
          className='hst-switch__button'
          onClick={handleChange}
          disabled={disabled}
          aria-disabled={disabled}
          aria-checked={value}
          ref={ref}
          {...rest}
        >
          <div
            tabIndex={0}
            className={cx('hst-switch__track', {
              '--checked': value
            })}
          >
            <span className={cx('hst-switch__thumb', { '--checked': value })} />
          </div>
        </button>
        {children && <label htmlFor={id}>{children}</label>}
      </div>
    );
  }
);

const WIDTH_IN_PX = 40;
const HEIGHT_IN_PX = 24;

const THUMB_WIDTH_IN_PX = 16;
const THUMB_HEIGHT_IN_PX = 16;
const THUMB_OFFSET_IN_REM = 1;

export default styled(withForm(Switch), { label: 'hst-switch' })(({ theme }) => {
  return css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.inline.nano};
    cursor: pointer;

    &.--disabled {
      opacity: ${theme.opacity.level[6]};
      cursor: not-allowed;
    }

    .hst-switch__button {
      all: unset;

      :disabled {
        pointer-events: none;
      }
    }

    label {
      all: unset;
      color: ${theme.neutralColor.low.pure};
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.size.xs};
      font-weight: ${theme.font.weight.regular};
      line-height: ${theme.line.height.default};
      user-select: none;
    }

    .hst-switch__track {
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

      &.--checked {
        background-color: ${theme.brandColor.primary.pure};
      }

      .hst-switch__thumb {
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
