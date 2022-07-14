import * as React from 'react';

import styled, { IStyledProp, css } from '@eduzz/houston-styles';

export interface ModalContentProps {
  children?: React.ReactNode;
}

const ModalContent = ({ ...rest }: ModalContentProps & React.HTMLAttributes<HTMLDivElement> & IStyledProp) => (
  <div {...rest} />
);

const ModalContentStyle = styled(ModalContent, { label: 'houston-modal-content' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};
    overflow: auto;
    flex: 1 1 0%;

    ${theme.breakpoints.down('sm')} {
      padding: ${theme.spacing.inset.xs};
    }
  `}
`;

export default React.memo(ModalContentStyle);