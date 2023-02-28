import { useCallback, KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, memo, useState } from 'react';

import type { InputStatus } from 'antd/lib/_util/statusUtils';
import { useContextSelector } from 'use-context-selector';

import SearchOutline from '@eduzz/houston-icons/SearchOutline';

import Input from '../../../Forms/Input';
import Portal from '../../../Portal';
import { styled, css } from '../../../styled';
import TopbarContext from '../context';

export interface TopbarSearchProps {
  className?: string;
  status?: InputStatus;
  placeholder?: string;
  disableEscape?: boolean;
  disableShortcut?: boolean;
  onEnter?: (value: string, clear: () => void) => void;
}

const isMacOS = navigator.userAgent.toLowerCase().includes('mac os');

const TopbarSearch = ({
  className,
  disableShortcut,
  disableEscape,
  onEnter,
  status,
  placeholder = 'Pesquisar'
}: TopbarSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>();
  const container = useContextSelector(TopbarContext, context => context.centerPortal);

  const onKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLInputElement>) => {
      const input = event.currentTarget;

      if (!disableEscape && event.key === 'Escape') {
        setValue('');
        input.blur();
        return;
      }

      if (event.key !== 'Enter') return;
      onEnter &&
        onEnter(input.value, () => {
          setValue('');
          input.blur();
        });
    },
    [disableEscape, onEnter]
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.target !== document.body || !inputRef.current) return;

      const metaKey = isMacOS ? e.metaKey : e.ctrlKey;
      if (e.key.toLowerCase() !== 'k' || !metaKey) return;

      e.preventDefault();
      e.stopPropagation();

      inputRef.current.focus();
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  if (!container) return null;

  return (
    <Portal target={container}>
      <div className={className}>
        <Input
          ref={inputRef}
          size='sm'
          startAdornment={<SearchOutline />}
          // prefix={<SearchOutlined />}
          // status={status}
          // allowClear
          errorMessage={status === 'error' ? ' ' : undefined}
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          endAdornment={
            disableShortcut ? undefined : (
              <span className='hts-topbar-search-shortcut'>{`${isMacOS ? '⌘' : 'Ctrl'}+K`}</span>
            )
          }
          onKeyDown={disableShortcut ? undefined : onKeyDown}
        />
      </div>
    </Portal>
  );
};

export default styled(memo(TopbarSearch))(
  ({ theme }) => css`
    display: flex;
    flex: 1;

    & input {
      height: auto !important;
    }

    & .hst-fieldset-message {
      display: none !important;
    }

    & .hts-topbar-search-shortcut {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: rgba(0, 0, 0, 0.88);
      font-size: 12px;
      line-height: 20px;
      list-style: none;
      display: inline-block;
      height: auto;
      margin-inline-end: 8px;
      padding-inline: 7px;
      white-space: nowrap;
      background: rgba(0, 0, 0, 0.02);
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      opacity: 1;
      transition: all 0.2s;
      text-align: start;
    }

    ${theme.mediaQuery.down('md')} {
      display: none;
    }
  `
);
