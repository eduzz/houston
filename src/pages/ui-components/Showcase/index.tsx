import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import ModalBase from '../Modal/__utils/ModalBase';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';
import Content from './Content';
import ShowcaseContextProvider from './context';
import Footer from './Footer';
import Image from './Image';
import Step from './Step';
import Text from './Text';
import Title from './Title';
import useResize from './useResize';

const MAX_WIDTH = 400;

interface ShowcaseProps {
  open?: boolean;
  currentStep: number;
  widthSize: number;
  controlDots?: boolean;
}

export const MAX_SHOWCASE_WIDTH = 400;
export const MIN_WINDOW_SIZE = 440;
export const OFFSET = 40;

const Showcase = ({
  open,
  currentStep,
  children,
  className,
  widthSize,
  controlDots
}: ShowcaseProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const [modalState, setModalState] = React.useState(true);

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
              stepSize: widthSize < MIN_WINDOW_SIZE ? widthSize - OFFSET : MAX_SHOWCASE_WIDTH,
              controlDots: controlDots || true
            }}
          >
            <div className={className}>{children}</div>
          </ShowcaseContextProvider>
        </ModalBase>
      </Overlay>
    </Portal>
  );
};

const StyledShowcase = styled(Showcase, { label: 'houston-showcase' })`
  ${({ theme, widthSize }) => {
    return css`
      width: ${widthSize - OFFSET}px;
      max-width: ${theme.pxToRem(MAX_WIDTH)}rem;
      overflow: hidden;
      box-shadow: none;
    `;
  }}
`;

const ShowcaseWrapper = ({
  children,
  ...rest
}: Omit<ShowcaseProps, 'widthSize'> & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const { width } = useResize();

  return (
    <StyledShowcase {...rest} widthSize={width}>
      {children}
    </StyledShowcase>
  );
};

export default nestedComponent(React.memo(ShowcaseWrapper), {
  Title,
  Step,
  Content,
  Image,
  Text,
  Footer
});
