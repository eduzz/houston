import * as React from 'react';

import styled, { css, cx, keyframes, StyledProp } from '@eduzz/houston-styles';

import useScrollBlock from '../hooks/useScrollBlock';

export type OverlayColor = 'low' | 'high';

export type OverlayProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  visible: boolean;
  /**
   * Default `low`
   */
  color?: OverlayColor;
  underTopbar?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Overlay = ({ className, visible, color = 'low', children, underTopbar, ...rest }: OverlayProps & StyledProp) => {
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
        'hst-color-high': color === 'high',
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
    background: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 106;
    opacity: ${theme.opacity.level[0]};
    visibility: hidden;
    inset: 0;
    backdrop-filter: blur(${theme.pxToRem(8)}rem);
    animation: ${fadeInAnimation} 200ms linear;

    &.hst-color-high {
      background: ${theme.hexToRgba(theme.neutralColor.high.pure, theme.opacity.level[6])};
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
