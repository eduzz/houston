import styled, { StyledProp, css } from '@eduzz/houston-styles';

export interface DrawerContentProps {
  children: React.ReactNode;
}

const DrawerContent = ({
  children,
  ...rest
}: DrawerContentProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => <div {...rest}>{children}</div>;

export default styled(DrawerContent, { label: 'houston-drawer-content' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;

    ${theme.breakpoints.down('sm')} {
      padding: ${theme.spacing.inset.xs};
    }
  `}
`;
