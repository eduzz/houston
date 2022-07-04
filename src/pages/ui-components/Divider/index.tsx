import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export interface IDivider extends IStyledProp {
  vertical?: boolean;
}

const Divider = ({ className, vertical }: IDivider) => {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState<number>(null);

  React.useEffect(() => {
    if (ref.current && vertical) {
      setHeight(ref.current.parentElement.clientHeight);
    }
  }, [vertical]);

  return <hr ref={ref} style={{ height }} className={cx(className, `--${vertical ? 'vertical' : 'horizontal'}`)} />;
};

export default React.memo(styled(Divider, { label: 'houston-divider' })`
  ${({ theme }) => css`
    border-style: solid;
    opacity: ${theme.opacity.level[3]};
    border-color: ${theme.neutralColor.low.pure};

    &.--horizontal {
      width: 100%;
      border-width: 0 0 ${theme.border.width.xs};
    }

    &.--vertical {
      border-width: 0 0 0 ${theme.border.width.xs};
      display: inline-flex;
      }
    }
  `}
`);