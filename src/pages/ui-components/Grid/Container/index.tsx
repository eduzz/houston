import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export type IContainerLayout = 'fluid' | 'solid';

export type IContainerType = 'comfortable' | 'cozy' | 'compact';

export const ContainerSizes = { comfortable: 10, cozy: 4, compact: 2 };

interface IContainer extends IStyledProp {
  children: React.ReactNode;
  spacing?: IContainerType;
  layout?: IContainerLayout;
}

const Container = ({ className, children, spacing, layout }: IContainer) => (
  <div className={cx(className, `--${spacing ?? 'cozy'}`, `--${layout ?? 'solid'}`)}>{children}</div>
);

export default React.memo(styled(Container, { label: 'houston-container' })`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1062px;
    margin: 0 auto;
    border: solid;
    border-color: black;

    &.--solid {
      max-width: 100%;
    }

    &.--comfortable {
      padding: 0 18px;
    }

    &.--cozy {
      padding: 0 28px;
    }

    &.--compact {
      padding: 0 20px;
    }
  `}
`);
