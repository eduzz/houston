import styled, { StyledProp, css, cx } from '@eduzz/houston-styles';

import Divider from '../../Divider';

export interface ModalFooterProps {
  children: React.ReactNode;
}

const ModalFooter = ({
  children,
  className,
  ...rest
}: ModalFooterProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <footer className={cx(className, 'hst-modal-footer')} {...rest}>
      <Divider />
      <div className='hst-modal-footer-wrapper'>{children}</div>
    </footer>
  );
};

export default styled(ModalFooter, { label: 'hst-modal-footer' })`
  ${({ theme }) => css`
    border-radius: 0 0 ${theme.border.radius.sm} ${theme.border.radius.sm};

    .hst-modal-footer-wrapper {
      padding: ${theme.spacing.squish.xs};
      display: flex;
      align-items: center;
      justify-content: flex-end;

      ${theme.breakpoints.up('sm')} {
        button.hst-button + button.hst-button {
          margin-left: ${theme.spacing.inline.xxxs};
        }
      }

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.inset.xs};
        flex-direction: column-reverse;

        button.hst-button {
          width: 100%;

          & + button.hst-button {
            margin-bottom: ${theme.spacing.stack.nano};
          }
        }
      }
    }
  `}
`;
