import {
  useCallback,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useRef,
  memo,
  useState,
  ChangeEvent
} from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Input, InputRef, Tag } from 'antd';

import { useContextSelector } from 'use-context-selector';

import Portal from '../../../Portal';
import styled, { css } from '../../../styled';
import LayoutContext from '../../context';

export interface TopbarSearchProps {
  className?: string;
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
  placeholder = 'Pesquisar'
}: TopbarSearchProps) => {
  const inputRef = useRef<InputRef>(null);

  const [value, setValue] = useState<string>();
  const container = useContextSelector(LayoutContext, context => context.topbar.centerPortal);

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

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
          prefix={<SearchOutlined />}
          allowClear
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          suffix={disableShortcut ? undefined : <Tag>{`${isMacOS ? '⌘' : 'Ctrl'}+K`}</Tag>}
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

    ${theme.mediaQuery.down('md')} {
      display: none;
    }
  `
);
