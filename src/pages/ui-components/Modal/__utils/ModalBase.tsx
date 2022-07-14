import styled, { IStyledProp, css } from '@eduzz/houston-styles';

export interface ModalBaseProps {
  children?: React.ReactNode;
}

const ModalBase = ({ ...rest }: ModalBaseProps & IStyledProp & React.HTMLAttributes<HTMLDivElement>) => {
  return <div role='dialog' {...rest} />;
};

export default styled(ModalBase)`
  ${({ theme }) => css`
    background-color: ${theme.neutralColor.high.pure};
    border-radius: ${theme.border.radius.sm};
    box-shadow: ${theme.shadow.level[3]};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${theme.breakpoints.down('sm')} {
      max-width: calc(100vw - ${theme.spacing.inset.xs});
      max-height: calc(100vh - ${theme.spacing.inset.xs});
    }
  `}
`;
