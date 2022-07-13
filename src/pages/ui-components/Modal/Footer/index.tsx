import * as React from 'react';

import styled, { IStyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';

export interface ModalFooterProps {
  children?: React.ReactNode;
}

const ModalFooter = ({ children, ...rest }: ModalFooterProps & React.HTMLAttributes<HTMLDivElement> & IStyledProp) => {
  return (
    <footer {...rest}>
      <Divider />
      <div className='modal-footer__content'>{children}</div>
    </footer>
  );
};

const ModalFooterStyle = styled(ModalFooter, { label: 'houston-modal-header' })`
  ${({ theme }) => css`
    border-radius: 0 0 ${theme.border.radius.sm} ${theme.border.radius.sm};

    .modal-footer__content {
      padding: ${theme.spacing.squish.xs};
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button + button {
        margin-left: ${theme.spacing.inline.xxxs};
      }
    }
  `}
`;

export default React.memo(ModalFooterStyle);
