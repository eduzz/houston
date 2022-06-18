import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import { ContainerProvider } from '../context';

export type IContainerLayout = 'fluid' | 'solid';
export type IContainerType = 'comfortable' | 'cozy' | 'compact';

interface IContainer extends IStyledProp {
  children: React.ReactNode;
  spacing?: IContainerType;
  layout?: IContainerLayout;
}

const Container = ({ className, children, spacing, layout }: IContainer) => (
  <ContainerProvider spacing={spacing}>
    <div className={cx(className, `--${spacing ?? 'cozy'}`, `--${layout ?? 'solid'}`)}>{children}</div>
  </ContainerProvider>
);

const MAX_WIDTH = 1062;

export default React.memo(styled(Container, { label: 'houston-container' })`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.pxToRem(MAX_WIDTH)}rem;
    margin: 0 auto;

    &.--fluid {
      max-width: 100%;
    }

    &.--comfortable {
      padding: 0 ${theme.spacing.xxxs};
    }

    &.--cozy {
      padding: 0 ${theme.spacing.xs};
    }

    &.--compact {
      padding: 0 ${theme.spacing.xxs};
    }
  `}
`);
