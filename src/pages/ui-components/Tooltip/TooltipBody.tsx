import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Caption from '@eduzz/houston-ui/Typography/Caption';

import { styleContent } from './styles';

export interface TooltipBody extends StyledProp {
  title: React.ReactNode;
}

const MIN_WIDTH_IN_PIXELS = 64;
const MAX_WIDTH_IN_PIXELS = 248;

const TooltipBody = ({ className, title }: TooltipBody) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [config, setConfig] = React.useState({
    width: 0,
    height: 0
  });

  React.useEffect(() => {
    if (!ref.current) return;

    setConfig({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight
    });
  }, []);

  return (
    <div ref={ref} role='tooltip' className={className}>
      <div id='houston-tooltip-arrow' data-popper-arrow />

      <style dangerouslySetInnerHTML={styleContent(config.width, config.height)} />

      <Caption
        color='neutralColor.high.pure'
        style={{ textAlign: config.width >= MAX_WIDTH_IN_PIXELS ? 'left' : 'center' }}
      >
        {title}
      </Caption>
    </div>
  );
};

export default React.memo(styled(TooltipBody, { label: 'hst-tooltip' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.xxs};
    border-radius: ${theme.border.radius.xs};
    min-width: ${theme.pxToRem(MIN_WIDTH_IN_PIXELS)}rem;
    max-width: ${theme.pxToRem(MAX_WIDTH_IN_PIXELS)}rem;
    background-color: ${theme.neutralColor.low.pure};

    #houston-tooltip-arrow,
    #houston-tooltip-arrow::before {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
      color: inherit;
    }

    #houston-tooltip-arrow {
      visibility: hidden;
    }

    #houston-tooltip-arrow::before {
      visibility: visible;
      content: '';
      transform: rotate(45deg);
    }
  `}
`);
