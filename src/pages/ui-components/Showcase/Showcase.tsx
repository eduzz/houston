import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import ModalBase from '../Modal/__utils/ModalBase';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';
import Content from './Content';
import useResize from './Content/useResize';
import ShowcaseContextProvider from './context';
import Footer from './Footer';
import Image from './Image';
import Step from './Step';
import Text from './Text';
import Title from './Title';

const MAX_WIDTH = 400;

interface ShowcaseProps {
  open: boolean;
  currentStep: number;
}

const MIN_STEP_SIZE = 400;

const Showcase = ({
  open,
  currentStep,
  children,
  className
}: ShowcaseProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const [modalState, setModalState] = React.useState<boolean>(true);
  const windowSize = useResize();

  const [{ props }] = children as React.ReactElement[];

  const { children: steps } = props;

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
          <ShowcaseContextProvider
            value={{
              currentStep,
              maxWidth: MAX_WIDTH,
              totalSteps: steps.length,
              stepSize: windowSize.width < 400 ? windowSize.width : MIN_STEP_SIZE
            }}
          >
            <div className={className}>{children}</div>
          </ShowcaseContextProvider>
        </ModalBase>
      </Overlay>
    </Portal>
  );
};

const ShowcaseWrapper = styled(Showcase, { label: 'houston-showcase' })`
  ${({ theme }) => {
    return css`
      max-width: ${theme.pxToRem(MAX_WIDTH)}rem;
      overflow: hidden;
      box-shadow: none;
    `;
  }}
`;

export default nestedComponent(React.memo(ShowcaseWrapper), {
  Title,
  Step,
  Content,
  Image,
  Text,
  Footer
});
