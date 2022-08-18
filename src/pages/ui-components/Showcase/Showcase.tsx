import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import { useShowcase } from '.';
import ModalBase from '../Modal/__utils/ModalBase';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';
import ShowcaseContextProvider from './context';
import Footer from './Footer';
import Image from './Image';
import Step from './Step';
import Text from './Text';
import Title from './Title';

const MAX_WIDTH = 400;

interface ShowcaseProps {
  open: boolean;
  initialStep: number;
}

const Showcase = (props: ShowcaseProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const { open, initialStep, children, className } = props;

  const contextValue = useShowcase(initialStep);
  const [modalState, setModalState] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (open === undefined) {
      setModalState(true);
      return;
    }

    setModalState(open);
  }, [open]);

  if (!modalState) return null;

  return (
    <Portal target='houston-showcase'>
      <Overlay visible>
        <ModalBase>
          <ShowcaseContextProvider value={contextValue}>
            <div className={className}>{children}</div>
          </ShowcaseContextProvider>
        </ModalBase>
      </Overlay>
    </Portal>
  );
};

const ShowcaseWrapper = styled(Showcase, { label: 'houston-showcase' })`
  ${({ theme }) => css`
    max-width: ${theme.pxToRem(MAX_WIDTH)}rem;
    overflow: hidden;
    display: flex;
    width: 100%;
    box-shadow: none;
  `}
`;

export default nestedComponent(React.memo(ShowcaseWrapper), {
  Title,
  Step,
  Image,
  Text,
  Footer
});
