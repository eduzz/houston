import * as React from 'react';

import { IconWebBase } from '../interfaces';
import IconBase from '../utils/wrapperWeb';
import Icon from './svg';

const IconHomeSolid = React.memo<IconWebBase>(({ ...rest }) => (
  <IconBase {...rest}>
    <Icon />
  </IconBase>
));

export default IconHomeSolid;
