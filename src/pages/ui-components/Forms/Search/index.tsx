import * as React from 'react';

import CancelIcon from '@eduzz/houston-icons/Cancel';
import SearchOutlineIcon from '@eduzz/houston-icons/SearchOutline';
import styled, { clsx, css, StyledProp } from '@eduzz/houston-styles';

import IconButton from '../../IconButton';
import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import nestedComponent from '../../utils/nestedComponent';
import Fieldset, { FieldsetProps } from '../_utils/Fieldset';
import withForm, { WithFormProps } from '../Form/withForm';
import { SearchContextProvider } from './context';
import Result from './Result';

type OwnProperties<V = any> = Omit<FieldsetProps, 'focused' | 'endAdornment' | 'startAdornment' | 'size'> & {
  value?: V | null | undefined;
  name?: string;
  placeholder?: string;
  onChange?: (value: V | null | undefined, e?: React.ChangeEvent<HTMLInputElement>) => any;
  onSelect?: (value: V | null | undefined, e?: React.MouseEvent<HTMLDivElement>) => any;
  onEnter?: (value: V | null | undefined, e?: React.KeyboardEvent<HTMLInputElement>) => any;
  onFocus?: (value: V | null | undefined, e?: React.FocusEvent<HTMLInputElement>) => any;
  onBlur?: (value: V | null | undefined, e?: React.FocusEvent<HTMLInputElement>) => any;
  /**
   * If the result should be listed, ensure it returns true based on the filter strategy
   */
  filterStrategy?: (result: string, index?: number, results?: string[]) => boolean;
  children?: React.ReactElement[];
};

export type SearchFieldProps<Values = any> = OwnProperties &
  Omit<React.HTMLAttributes<HTMLInputElement>, keyof OwnProperties<Values>> &
  StyledProp &
  WithFormProps<Values>;

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      label,
      value,
      name,
      placeholder,
      loading,
      disabled,
      errorMessage,
      fullWidth = true,
      helperText,
      className,
      children,
      onChange,
      onSelect,
      onEnter,
      onFocus,
      onBlur,
      filterStrategy,
      ...props
    },
    ref
  ) => {
    const { openPopover, closePopover, isPopoverOpened, popoverTargetProps, popoverProps } = usePopover();

    function resetField(e: React.MouseEvent<HTMLButtonElement>) {
      e.stopPropagation();
      onChange && onChange('');
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      const value = e.currentTarget.value;
      onChange && onChange(value, e);
      if (value?.length && !isPopoverOpened) {
        openPopover();
      }
      if (!value?.length && isPopoverOpened) {
        closePopover();
      }
    }

    function handleInputFocus(e: React.FocusEvent<HTMLInputElement>) {
      const value = e.currentTarget.value;
      onFocus && onFocus(value, e);
      if (value?.length && !isPopoverOpened) {
        openPopover();
      }
      if (!value?.length && isPopoverOpened) {
        closePopover();
      }
    }

    function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.key === 'Enter') {
        onEnter && onEnter(value, e);
        isPopoverOpened && closePopover();
      }
    }

    function handleInputBlur(e: React.FocusEvent<HTMLInputElement>) {
      const value = e.currentTarget.value;
      onBlur && onBlur(value, e);
    }

    const shouldHideCleanBtn = !value;

    const results = React.useMemo(() => {
      if (filterStrategy) {
        const arrayChildren = React.Children.toArray(children) as React.ReactElement[];
        return arrayChildren.filter(child => filterStrategy(child.props.children));
      }
      return children;
    }, [children, filterStrategy]);

    return (
      <SearchContextProvider closePopover={closePopover} onChange={onChange} onSelect={onSelect}>
        <Popover {...popoverProps} placement='bottom' fullWidth>
          {results}
        </Popover>

        <Fieldset
          containerRef={popoverTargetProps.ref}
          label={label}
          loading={loading}
          className={className}
          focused={isPopoverOpened}
          errorMessage={errorMessage}
          fullWidth={fullWidth}
          startAdornment={<SearchOutlineIcon size='md' />}
          endAdornment={
            <IconButton
              className={clsx(shouldHideCleanBtn && 'hst-input-search-hidden')}
              aria-hidden={shouldHideCleanBtn}
              hidden={shouldHideCleanBtn}
              onClick={resetField}
              aria-label='Limpar campo'
              size='md'
            >
              <CancelIcon size='sm' />
            </IconButton>
          }
          helperText={helperText}
          disabled={disabled}
        >
          <input
            ref={ref}
            {...props}
            name={name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleInputKeyDown}
            onBlur={handleInputBlur}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            className='hst-input-search-input'
          />
        </Fieldset>
      </SearchContextProvider>
    );
  }
);

const StyledSearchField = styled(withForm(SearchField), { label: 'hst-input-search' })`
  ${({ theme }) => css`
    .hst-fieldset-content {
      overflow: hidden;

      .hst-input-search-input {
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

    .hst-input-search-hidden {
      visibility: hidden;
    }
  `}
`;

/**
 * @deprecated Use Search from Antd
 */
export default nestedComponent(React.memo(StyledSearchField), {
  Result
});
