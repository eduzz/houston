import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../Divider';

export interface DrawerFooterProps {
  children: React.ReactNode;
}

const DrawerFooter = ({ children, ...rest }: DrawerFooterProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <footer {...rest}>
      <Divider />
      <div className='hst-drawer-footer-wrapper'>{children}</div>
    </footer>
  );
};

/**
 * @deprecated Use Drawer from Antd
 * https://ant.design/components/drawer/
 */
export default styled(DrawerFooter, { label: 'hst-drawer-footer' })`
  ${({ theme }) => css`
    .hst-drawer-footer-wrapper {
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
