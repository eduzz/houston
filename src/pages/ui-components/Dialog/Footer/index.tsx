import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';

export interface DialogFooterProps {
  children: React.ReactNode;
}

const DialogFooter = ({ children, ...rest }: DialogFooterProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <footer {...rest}>
      <Divider />
      <div className='hst-dialog-footer-wrapper'>{children}</div>
    </footer>
  );
};

export default styled(DialogFooter, { label: 'hst-dialog-footer' })`
  ${({ theme }) => css`
    border-radius: 0 0 ${theme.border.radius.sm} ${theme.border.radius.sm};

    .hst-dialog-footer-wrapper {
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
