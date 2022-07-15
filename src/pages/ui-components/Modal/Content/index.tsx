import styled, { IStyledProp, css } from '@eduzz/houston-styles';

export interface ModalContentProps {
  children?: React.ReactNode;
}

const ModalContent = ({ ...rest }: ModalContentProps & React.HTMLAttributes<HTMLDivElement> & IStyledProp) => (
  <div {...rest} />
);

export default styled(ModalContent, { label: 'houston-modal-content' })`
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
