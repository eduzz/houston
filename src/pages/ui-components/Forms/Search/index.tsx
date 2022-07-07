import * as React from 'react';

import {
  useFormIsSubmitting,
  useFormValue,
  useFormError,
  useFormSetValue,
  useFormContext
} from '@eduzz/houston-forms/context';
import CancelIcon from '@eduzz/houston-icons/Cancel';
import SearchOutlineIcon from '@eduzz/houston-icons/SearchOutline';
import styled, { clsx, css, IStyledProp } from '@eduzz/houston-styles';

import IconButton from '../../IconButton';
import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import nestedComponent from '../../utils/nestedComponent';
import Fieldset, { IFieldsetProps } from '../_utils/Fieldset';
import { SearchContextProvider } from './context';
import Result from './Result';

type OwnProperties = Omit<IFieldsetProps, 'focused' | 'endAdornment' | 'startAdornment' | 'size'> & {
  value?: string;
  name?: string;
  placeholder?: string;
  onChange?: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => any;
  onSelect?: (value: string, e?: React.MouseEvent<HTMLDivElement>) => any;
  onEnter?: (value: string, e?: React.KeyboardEvent<HTMLInputElement>) => any;
  children?: React.ReactNode;
};

export type SearchFieldProps = OwnProperties & React.RefAttributes<HTMLSelectElement> & IStyledProp;

const SearchField = ({
  label,
  value: valueProp,
  name,
  placeholder,
  loading,
  disabled,
  errorMessage: errorMessageProp,
  fullWidth,
  helperText,
  className,
  children,
  onChange,
  onSelect,
  onEnter
}: SearchFieldProps) => {
  const { openPopover, closePopover, isPopoverOpened, popoverTargetProps, popoverProps } = usePopover();

  const isSubmitting = useFormIsSubmitting();
  const value = useFormValue(name, valueProp);
  const errorMessage = useFormError(name, errorMessageProp);
  const setFormValue = useFormSetValue(name);
  const form = useFormContext();

  function resetField(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onChange?.('');
    setFormValue?.('');
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    onChange?.(value, e);
    setFormValue?.(value);
    if (value?.length && !isPopoverOpened) {
      openPopover();
    }
    if (!value?.length && isPopoverOpened) {
      closePopover();
    }
  }

  function handleInputFocus(e: React.FocusEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value?.length && !isPopoverOpened) {
      openPopover();
    }
    if (!value?.length && isPopoverOpened) {
      closePopover();
    }
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onEnter?.(value, e);
      form?.handleSubmit?.(e);
      isPopoverOpened && closePopover();
    }
  }

  const shouldHideCleanBtn = !value;

  return (
    <SearchContextProvider
      value={value}
      closePopover={closePopover}
      onChange={onChange}
      setFormValue={setFormValue}
      onSelect={onSelect}
    >
      <Popover {...popoverProps} placement='bottom' fullWidth>
        {children}
      </Popover>

      <Fieldset
        containerRef={popoverTargetProps.ref}
        label={label}
        loading={loading}
        className={className}
        focused={isPopoverOpened}
        errorMessage={errorMessage}
        fullWidth={fullWidth}
        // # TODO Atualizar para Icon 'md' quando tivermos o componente atualizado hehe
        startAdornment={<SearchOutlineIcon size={24} />}
        endAdornment={
          <IconButton
            className={clsx(shouldHideCleanBtn && '--hidden')}
            aria-hidden={shouldHideCleanBtn}
            hidden={shouldHideCleanBtn}
            onClick={resetField}
            aria-label='Limpar campo'
            size='md'
          >
            <CancelIcon size={16} />
          </IconButton>
        }
        helperText={helperText}
        disabled={isSubmitting || disabled}
      >
        <input
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleInputKeyDown}
          disabled={isSubmitting || disabled || loading}
          placeholder={placeholder}
          value={value}
          className='__input'
        />
      </Fieldset>
    </SearchContextProvider>
  );
};

const StyledSearchField = styled(SearchField, { label: 'hostoun-form-search-field' })`
  ${({ theme }) => css`
    .__content {
      overflow: hidden;

      .__input {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border: 0;
        background-color: transparent;
        outline: none;
        font-size: ${theme.font.size.xs};
        font-weight: ${theme.font.weight.regular};
        line-height: ${theme.line.height.default};
        font-family: ${theme.font.family.base};
        padding-inline: ${theme.spacing.inline.nano};

        &::placeholder {
          color: ${theme.neutralColor.low.medium};
        }
      }
    }

    .--hidden {
      visibility: hidden;
    }
  `}
`;

export default nestedComponent(React.memo(StyledSearchField), {
  Result
});
