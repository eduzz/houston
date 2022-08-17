import Modal from '@eduzz/houston-ui/Modal';

const Text = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <Modal.Content>{children}</Modal.Content>;
};

export default Text;
