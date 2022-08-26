import styled, { css, StyledProp } from '@eduzz/houston-styles';

import Modal from '../../Modal';
import ControlDots from '../ControlDots';

const Footer = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <div {...rest}>
      <ControlDots />
      <Modal.Footer>{children}</Modal.Footer>
    </div>
  );
};

export default styled(Footer, { label: 'hst-showcase-footer' })`
  ${({ theme }) => css`
    background-color: ${theme.neutralColor.high.pure};
    position: sticky;
    bottom: 0;
    width: 100%;
  `}
`;
