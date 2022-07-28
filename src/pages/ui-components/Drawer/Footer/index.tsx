import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';

export interface DrawerFooterProps {
  children: React.ReactNode;
}

const DrawerFooter = ({ children, ...rest }: DrawerFooterProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <footer {...rest}>
      <Divider />
      <div className='drawer-footer__wrapper'>{children}</div>
    </footer>
  );
};

export default styled(DrawerFooter, { label: 'houston-drawer-footer' })`
  ${({ theme }) => css`
    .drawer-footer__wrapper {
      padding: ${theme.spacing.squish.xs};
      display: flex;
      align-items: center;
      justify-content: flex-end;

      ${theme.breakpoints.up('sm')} {
        button + button {
          margin-left: ${theme.spacing.inline.xxxs};
        }
      }

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.inset.xs};
        flex-direction: column-reverse;

        button {
          width: 100%;

          & + button {
            margin-bottom: ${theme.spacing.stack.nano};
          }
        }
      }
    }
  `}
`;
