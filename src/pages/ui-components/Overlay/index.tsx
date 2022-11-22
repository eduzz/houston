import * as React from 'react';

import useScrollBlock from '../hooks/useScrollBlock';
import styled, { css, cx, keyframes, StyledProp } from '../styled';

export type OverlayColor = 'light' | 'dark' | 'auto';

export type OverlayProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  visible: boolean;
  color?: OverlayColor;
  underTopbar?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Overlay = ({ className, visible, color = 'auto', children, underTopbar, ...rest }: OverlayProps & StyledProp) => {
  const { disableScroll, enableScroll } = useScrollBlock();

  React.useEffect(() => {
    if (visible) {
      disableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [enableScroll, disableScroll, visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden='true'
      tabIndex={-1}
      className={cx(className, {
        'hst-visible': visible,
        [`hst-color-${color}`]: !!color,
        'hst-under-topbar': underTopbar
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export default styled(Overlay, {
  label: 'hst-overlay'
})(
  ({ theme }) => css`
    background: ${theme.hexToRgba(theme.mode === 'light' ? '#ffffff' : '#000000', 0.32)};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 106;
    opacity: 0;
    visibility: hidden;
    inset: 0;
    backdrop-filter: blur(${theme.pxToRem(8)}rem);
    animation: ${fadeInAnimation} 200ms linear;

    &.hst-color-light {
      background: ${theme.hexToRgba('#ffffff', 0.32)};
    }

    &.hst-color-dark {
      background: ${theme.hexToRgba('#000000', 0.32)};
    }

    &.hst-visible {
      opacity: 1;
      visibility: visible;
    }

    &.hst-under-topbar {
      z-index: 104;
    }
  `
);
