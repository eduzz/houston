import * as React from 'react';

import styled, { StyledProp } from '@eduzz/houston-styles';
import Modal from '@eduzz/houston-ui/Modal';

import { useShowcase } from '.';
import Overlay from '../Overlay';
import Portal from '../Portal';
import nestedComponent from '../utils/nestedComponent';
import ShowcaseContextProvider from './context';
import Image from './Image';
import Step from './Step';
import Text from './Text';
import Title from './Title';

interface ShowcaseProps {
  open: boolean;
  initialStep: number;
}

const Showcase = (props: ShowcaseProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const { open, initialStep, children } = props;

  const contextValue = useShowcase(initialStep);
  const [modalState, setModalState] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (open === undefined) {
      setModalState(true);
      return;
    }

    setModalState(open);
  }, [open]);

  return (
    <Portal target='houston-showcase'>
      <Overlay visible>
        <ShowcaseContextProvider value={contextValue}>
          <Modal visible={modalState}>
            <Modal.Content>
              Dado o fluxo de dados atual, o último pull request desse SCRUM superou o desempenho de compilação
              multi-plataforma de forma asincrona.
            </Modal.Content>
            <Modal.Footer>{children}</Modal.Footer>
          </Modal>
          <div className='hst-showcase-content'>{children}</div>
        </ShowcaseContextProvider>
      </Overlay>
    </Portal>
  );
};

const ShowcaseWrapper = styled(Showcase, { label: 'hst-showcase' })`
  max-width: 400px;

  & .hst-showcase-content: {
    display: 'flex';
    flexDirection: column;
    width: 100%;
    box-shadow': none;
  }
`;

export default nestedComponent(React.memo(ShowcaseWrapper), {
  Title: Title,
  Step: Step,
  Image: Image,
  Text: Text
});
