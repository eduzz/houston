import { memo } from 'react';

import { IconWebBase } from '../interfaces';
import IconBase from '../utils/wrapperWeb';
import Icon from './svg';

const IconChevronRight = memo<IconWebBase>(({ ...rest }) => (
  <IconBase {...rest}>
    <Icon />
  </IconBase>
));

export default IconChevronRight;
