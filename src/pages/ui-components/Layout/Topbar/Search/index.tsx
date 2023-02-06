import { useCallback, KeyboardEvent as ReactKeyboardEvent, useEffect, useRef } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Input, InputRef, Tag } from 'antd';

import { useContextSelector } from 'use-context-selector';

import Portal from '../../../Portal';
import styled, { css } from '../../../styled';
import LayoutContext from '../../context';

export interface TopbarSearchProps {
  className?: string;
  placeholder?: string;
  disableShortcut?: boolean;
  onEnter?: (value: string) => void;
}

const isMacOS = navigator.userAgent.toLowerCase().includes('mac os');

const TopbarSearch = ({ className, disableShortcut, onEnter, placeholder = 'Pesquisar' }: TopbarSearchProps) => {
  const inputRef = useRef<InputRef>(null);
  const container = useContextSelector(LayoutContext, context => context.topbar.centerPortal);

  const onKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Escape') {
        event.currentTarget.blur();
        const input = event.currentTarget;
        setTimeout(() => (input.value = ''), 0);
        return;
      }

      if (event.key !== 'Enter') return;
      onEnter && onEnter(event.currentTarget.value);
    },
    [onEnter]
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.target !== document.body || !inputRef.current) return;

      const metaKey = isMacOS ? e.metaKey : e.ctrlKey;
      if (e.key !== 'k' || !metaKey) return;

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
          suffix={disableShortcut ? undefined : <Tag>{`${isMacOS ? '⌘' : 'Ctrl'}+K`}</Tag>}
          onKeyDown={disableShortcut ? undefined : onKeyDown}
        />
      </div>
    </Portal>
  );
};

export default styled(TopbarSearch)(
  ({ theme }) => css`
    display: flex;
    flex: 1;

    ${theme.mediaQuery.down('md')} {
      display: none;
    }
  `
);
