import styled, { StyledProp, css } from '@eduzz/houston-styles';

export interface ModalContentProps {
  children: React.ReactNode;
}

const ModalContent = ({ children, ...rest }: ModalContentProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => (
  <div {...rest}>{children}</div>
);

/**
 * @deprecated Use Modal from Antd
 * https://ant.design/components/modal/
 */
export default styled(ModalContent, { label: 'hst-modal-content' })`
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
