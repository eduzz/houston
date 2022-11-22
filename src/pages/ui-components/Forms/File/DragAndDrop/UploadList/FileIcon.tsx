import FileOutlineIcon from '@eduzz/houston-icons/FileOutline';
import FolderZipOutlineIcon from '@eduzz/houston-icons/FolderZipOutline';
import ImageIcon from '@eduzz/houston-icons/Image';
import MicrophoneOutlineIcon from '@eduzz/houston-icons/MicrophoneOutline';
import VideoOutlineIcon from '@eduzz/houston-icons/VideoOutline';
import { StyledProp } from '@eduzz/houston-styles';

import { UploadFile } from '../types';

export type FileIconProps = StyledProp & {
  file: UploadFile<any>;
};

const FileIcon = ({ className, file }: FileIconProps) => {
  let Icon = FileOutlineIcon;

  if (file.type === 'application/x-zip-compressed') {
    Icon = FolderZipOutlineIcon;
  }

  if (file.type?.includes('image')) {
    Icon = ImageIcon;
  }

  if (file.type?.includes('video')) {
    Icon = VideoOutlineIcon;
  }

  if (file.type?.includes('audio')) {
    Icon = MicrophoneOutlineIcon;
  }

  return <Icon className={className} size='md' />;
};

export default FileIcon;
