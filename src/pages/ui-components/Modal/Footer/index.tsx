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
      <div className='modal-footer__wrapper'>{children}</div>
    </footer>
  );
};

export default React.memo(styled(ModalFooter, { label: 'houston-modal-footer' })`
  ${({ theme }) => css`
    border-radius: 0 0 ${theme.border.radius.sm} ${theme.border.radius.sm};

    .modal-footer__wrapper {
      padding: ${theme.spacing.squish.xs};
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button + button {
        margin-left: ${theme.spacing.inline.xxxs};
      }

      ${theme.breakpoints.down('sm')} {
        flex-direction: column-reverse;
        padding: ${theme.spacing.inset.xs};

        button {
          width: 100%;
        }

        button + button {
          margin-left: 0;
          margin-bottom: ${theme.spacing.stack.nano};
        }
      }
    }
  `}
`);
