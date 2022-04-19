import { memo } from 'react';

import { IconWebBase } from '../interfaces';
import IconBase from '../utils/wrapperWeb';
import Icon from './svg';

const IconPaperAirplaneOutline = memo<IconWebBase>(({ ...rest }) => (
  <IconBase {...rest}>
    <Icon />
  </IconBase>
));

export default IconPaperAirplaneOutline;
