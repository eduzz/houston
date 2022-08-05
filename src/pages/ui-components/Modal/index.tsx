import { ModalContentProps } from './__internals/Content';
import { ModalFooterProps } from './__internals/Footer';
import { ModalHeaderProps } from './__internals/Header';
import { ModalFullScreenProps } from './Fullscreen';
import Modal, { ModalProps, ModalSizes, modalSizesInPx } from './Modal';

export type { ModalProps, ModalHeaderProps, ModalContentProps, ModalFooterProps, ModalSizes, ModalFullScreenProps };

export { modalSizesInPx };

export default Modal;
