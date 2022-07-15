import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import useScrollBlock from '../hooks/useScrollBlock';

export type OverlayColor = 'low' | 'high';

export interface OverlayProps {
  children?: React.ReactNode;
  visible: boolean;
  /**
   * Default `low`
   */
  color?: OverlayColor;
  underTopbar?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay = ({ className, visible, color = 'low', ...rest }: OverlayProps & IStyledProp) => {
  const { disableScroll, enableScroll } = useScrollBlock();

  React.useEffect(() => {
    if (visible) {
      disableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [enableScroll, disableScroll, visible]);

  return (
    <div
      aria-hidden='true'
      tabIndex={-1}
      className={cx(className, { '--overlay-visible': visible, '--overlay-color-high': color === 'high' })}
      {...rest}
    />
  );
};

export default styled(Overlay, {
  label: 'houston-overlay',
  shouldForwardProp: propName => propName !== 'underTopbar'
})(
  ({ theme, underTopbar }) => css`
    background: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${underTopbar ? 104 : 106};
    opacity: ${theme.opacity.level[0]};
    visibility: hidden;
    inset: 0;
    backdrop-filter: blur(${theme.pxToRem(8)}rem);

    &.--overlay-color-high {
      background: ${theme.hexToRgba(theme.neutralColor.high.pure, theme.opacity.level[6])};
    }

    &.--overlay-visible {
      opacity: 1;
      visibility: visible;
    }
  `
);
