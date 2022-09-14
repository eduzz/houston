import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export interface Divider extends StyledProp {
  vertical?: boolean;
}

const Divider = ({ className, vertical }: Divider) => {
  const ref = React.useRef<HTMLHRElement>(null);

  React.useEffect(() => {
    if (ref.current && vertical) {
      ref.current.style.height = `${ref.current.parentElement?.clientHeight}px`;
    }
  }, [vertical]);

  return <hr ref={ref} className={cx(className, { 'hst-divider-vertical': vertical })} />;
};

export default React.memo(styled(Divider, { label: 'hst-divider' })`
  ${({ theme }) => css`
    border-style: solid;
    opacity: ${theme.opacity.level[3]};
    border-color: ${theme.neutralColor.low.pure};
    border-width: 0 0 ${theme.border.width.xs};
    width: 100%;

    &.hst-divider-vertical {
      width: auto;
      border-width: 0 0 0 ${theme.border.width.xs};
      display: inline-flex;
    }
  `}
`);
