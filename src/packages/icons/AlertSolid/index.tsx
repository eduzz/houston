import * as React from 'react';

import { IIconWebBase } from '../interfaces';
import IconBase from '../wrapperWeb';
import Icon from './svg';

const IconAlertSolid = React.memo<IIconWebBase>(({ ...rest }) => (
  <IconBase {...rest}>
    <Icon />
  </IconBase>
));

export default IconAlertSolid;
