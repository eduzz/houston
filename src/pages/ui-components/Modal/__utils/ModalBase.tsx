import * as React from 'react';

import styled, { StyledProp, css } from '@eduzz/houston-styles';

export interface ModalBaseProps {
  children?: React.ReactNode;
}

const ModalBase = ({ children, ...rest }: ModalBaseProps & StyledProp & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div role='dialog' {...rest}>
      {children}
    </div>
  );
};

export default styled(ModalBase, { label: 'hst-modal-base' })`
  ${({ theme }) => css`
    background-color: ${theme.neutralColor.high.pure};
    border-radius: ${theme.border.radius.sm};
    box-shadow: ${theme.shadow.level[3]};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;
