import CancelIcon from '@eduzz/houston-icons/Cancel';
import TrashOutlineIcon from '@eduzz/houston-icons/TrashOutline';
import { StyledProp } from '@eduzz/houston-styles';

import { UploadFile } from '../types';

export type RemoveIconProps = StyledProp & {
  file: UploadFile;
  onRemove?: (file: UploadFile) => void;
};

const RemoveIcon = ({ className, file, onRemove }: RemoveIconProps) => {
  let Icon = TrashOutlineIcon;

  const onInternalRemove = () => {
    onRemove && onRemove(file);
  };

  if (file.status === 'uploading') {
    Icon = CancelIcon;
  }

  return <Icon className={className} role='button' size='md' onClick={onInternalRemove} />;
};

export default RemoveIcon;
