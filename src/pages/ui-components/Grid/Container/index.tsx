import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';
import { ContainerProvider } from '../context';

export type IContainerLayout = 'fluid' | 'solid';

export type IContainerType = 'comfortable' | 'cozy' | 'compact';

export const ContainerSizes = { comfortable: 40, cozy: 16, compact: 8 };

interface IContainer extends IStyledProp {
  children: React.ReactNode;
  spacing?: IContainerType;
  layout?: IContainerLayout;
}

const Container = ({ className, children, spacing, layout }: IContainer) => (
  <ContainerProvider spacing={ContainerSizes[spacing] ?? ContainerSizes['cozy']}>
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
      padding: ${theme.spacing.xxxs};
    }

    &.--compact {
      padding: ${theme.spacing.xxs};
    }

    &.--cozy {
      padding: ${theme.spacing.xs};
    }
  `}
`);
