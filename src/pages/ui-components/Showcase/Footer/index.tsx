import Modal from '../../Modal';
import ControlDots from '../ControlDots';

const Footer = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div>
      <ControlDots />
      <Modal.Footer>{children}</Modal.Footer>
    </div>
  );
};

export default Footer;
