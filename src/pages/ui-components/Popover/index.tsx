import * as React from 'react';

import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

import { IStyledProp } from '@eduzz/houston-styles';

import PopoverContext from './context';

export interface IPopoverProps extends IStyledProp {
  targetRef: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
}

export interface IPopoverRef {
  open(): void;
  close(): void;
}

const Popover = React.forwardRef<IPopoverRef, IPopoverProps>(({ targetRef, children, className }, ref) => {
  const setState = React.useContext(PopoverContext);
  const contentRef = React.useRef<HTMLDivElement>();
  const closeRef = React.useRef<() => void>();

  React.useImperativeHandle(
    ref,
    () => ({
      open() {
        closeRef.current = setState({
          opened: true,
          target: targetRef.current,
          content: contentRef.current
        });
      },
      close() {
        closeRef.current && closeRef.current();
      }
    }),
    [contentRef, setState, targetRef]
  );

  return (
    <div ref={contentRef} className={className}>
      <div className='__container'>{children}</div>
    </div>
  );
});

const showAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const hideAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0; }
`;

export default styled(Popover, { label: 'houston-popover' })(
  ({ theme }) => css`
    box-sizing: border-box;
    max-width: 100vw;
    z-index: 1000;
    pointer-events: none;
    position: absolute;
    top: calc(100vh * -1000);
    left: calc(100vh * -1000);

    & > .__container {
      width: 100%;
      max-height: 50vh;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: white;
      box-shadow: ${theme.shadow.level[1]};
      border-radius: ${theme.border.radius.xs};
      box-sizing: border-box;
      transform-origin: top center;
      animation-duration: 0.2s;
      animation-name: ${hideAnimation};
      animation-fill-mode: forwards;
    }

    &.--opened {
      pointer-events: auto;

      & > .__container {
        animation-name: ${showAnimation};
      }
    }
  `
);
