import { memo } from 'react';

import { IconWebBase } from '../interfaces';
import IconBase from '../utils/wrapperWeb';
import Icon from './svg';

const IconCameraFrontSolid = memo<IconWebBase>(({ ...rest }) => (
  <IconBase {...rest}>
    <Icon />
  </IconBase>
));

export default IconCameraFrontSolid;
