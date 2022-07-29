import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';

export interface DrawerFooterProps {
  children: React.ReactNode;
}

const DrawerFooter = ({ children, ...rest }: DrawerFooterProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <footer {...rest}>
      <Divider />
      <div className='hst-drawer-footer__wrapper'>{children}</div>
    </footer>
  );
};

export default styled(DrawerFooter, { label: 'hst-drawer-footer' })`
  ${({ theme }) => css`
    .hst-drawer-footer__wrapper {
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
