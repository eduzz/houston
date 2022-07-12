import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';
import Caption from '@eduzz/houston-ui/Typography/Caption';

import { styleContent } from './styles';

export interface ITooltipBody extends IStyledProp {
  title: React.ReactNode;
}

const TooltipBody = ({ className, title }: ITooltipBody) => {
  const ref = React.useRef<any>();
  const [width, setWidth] = React.useState();
  const [height, setHeight] = React.useState();

  React.useEffect(() => {
    setWidth(ref?.current?.offsetWidth);
    setHeight(ref?.current?.offsetHeight);
  }, []);

  return (
    <div ref={ref} role='tooltip' className={className}>
      <div id='houston-tooltip-arrow' data-popper-arrow />
      <style dangerouslySetInnerHTML={styleContent(width, height)} />
      <Caption color='neutralColor.high.pure'>{title}</Caption>
    </div>
  );
};

export default React.memo(styled(TooltipBody, { label: 'houston-tooltip' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.xxs};
    border-radius: ${theme.border.radius.xs};
    min-width: ${theme.spacing.xl};
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
