import * as React from 'react';

import FormMaskAdapter from '@eduzz/houston-core/maskAdapter';
import styled, { css, cx } from '@eduzz/houston-styles';

import useMask from '../../hooks/useMask';
import Fieldset, { FieldsetProps } from '../_utils/Fieldset';
import withForm, { WithFormProps } from '../Form/withForm';

type Rows = 2 | 4 | 6 | 8 | 10 | 14 | 18 | 24;
const ROWS: Array<Rows> = [2, 4, 6, 8, 10, 14, 18, 24];

interface OwnProperties<V = any> extends FieldsetProps {
  value?: V | null | undefined;
  mask?: FormMaskAdapter;
  multiline?: boolean;
  rows?: Rows;
  disableAutoResize?: boolean;
  onChange?: (value: V | null | undefined, event: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (value: V | null | undefined, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
  onPressEnter?: (value: V | null | undefined) => any;
}

export interface InputProps<V = any>
  extends OwnProperties<V>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProperties>,
    WithFormProps<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      mask,
      value,
      name,
      loading,
      onFocus,
      onChange,
      onBlur,
      errorMessage,
      fullWidth,
      endAdornment,
      startAdornment,
      multiline,
      size,
      rows,
      disableAutoResize,
      className,
      readOnly,
      onPressEnter,
      onKeyPress,
      helperText,
      disabled = false,
      type,
      ...props
    },
    ref
  ) => {
    const [focusEffect, setFocusEffect] = React.useState(false);
    const { maskClean, maskedValue } = useMask(mask, value);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanValue = maskClean(e.currentTarget.value);
        onChange && onChange(cleanValue === '' ? null : cleanValue, e);
      },
      [onChange, maskClean]
    );

    const handleFocus = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onFocus && onFocus(e as any);
        setFocusEffect(true);
      },
      [onFocus]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur && onBlur(maskClean(e.currentTarget.value), e);
        setFocusEffect(false);
      },
      [onBlur, maskClean]
    );

    const handlePressEnter = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (e.key === 'Enter') {
          e.preventDefault();
          onPressEnter && onPressEnter(maskClean(target.value));
        }
      },
      [onPressEnter, maskClean]
    );

    return (
      <Fieldset
        label={label}
        size={size}
        loading={loading}
        focused={focusEffect}
        errorMessage={errorMessage}
        fullWidth={fullWidth}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        helperText={helperText}
        disabled={disabled}
        hidden={type === 'hidden'}
        className={cx(className, {
          '--multiline': multiline,
          [`--multiline-rows-${rows ?? 4}`]: multiline,
          '--disable-auto-resize': disableAutoResize
        })}
      >
        <div className='__wrapperAutoSizer'>
          {!!multiline && !disableAutoResize && <div className='__autoSizer __text'>{value + ' '}</div>}
          {React.createElement(multiline ? 'textarea' : 'input', {
            ref,
            value: maskedValue ?? '',
            ...props,
            name,
            disabled,
            type,
            className: '__input __text',
            readOnly: readOnly ?? loading,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyPress: onPressEnter ? handlePressEnter : onKeyPress
          })}
        </div>
      </Fieldset>
    );
  }
);

export default styled(withForm(React.memo(Input)), { label: 'houston-form-text' })(
  ({ theme }) => css`
    & .__wrapperAutoSizer {
      display: grid;
      grid-template-columns: 100%;
      width: 100%;
      min-height: 100%;

      & .__autoSizer {
        pointer-events: none;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
        visibility: hidden;
        grid-area: 1 / 1 / 2 / 2;
      }

      & .__input {
        grid-area: 1 / 1 / 2 / 2;
        height: 100%;
        width: 100%;
        background-color: transparent;
        outline: none;
        color: ${theme.neutralColor.low.pure};
        border: none;
        transition: 0.3s;

        &::placeholder {
          color: ${theme.neutralColor.low.medium};
        }
      }
    }

    &.--multiline {
      & .__container {
        align-items: flex-start;
        height: auto;

        & .__startAdornment,
        & .__endAdornment {
          align-items: flex-start;
          margin-top: ${theme.spacing.xxxs};
        }

        & .__input {
          resize: none;
          overflow: hidden;
        }

        & .__autoSizer,
        & .__input {
          padding: ${theme.spacing.xxxs};
        }
      }

      &.--disable-auto-resize {
        & .__input {
          overflow: auto;
        }
      }

      ${ROWS.map(
        n => css`
          &.--multiline-rows-${n} .__wrapperAutoSizer {
            min-height: calc(${n * 19}px + ${theme.spacing.xs});
          }
        `
      )}
    }

    &.--disabled {
      & .__label,
      & .__input {
        cursor: not-allowed;
      }
    }

    &.--loading {
      & .__label,
      & .__input {
        cursor: progress;
      }
    }
  `
);
