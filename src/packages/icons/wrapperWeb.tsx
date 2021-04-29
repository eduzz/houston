import * as React from 'react';

import { IIconWebBase } from './interfaces';
import getIconSize from './utils/getIconSize';

const IconBase = React.memo<IIconWebBase>(({ children, size, ...rest }) => {
  const width = React.useMemo(() => getIconSize(size), [size]);
  const child = React.useMemo(() => React.cloneElement(children as React.ReactElement, { width }), [children, width]);

  return (
    <span className='houston-icon' {...rest}>
      {child}
    </span>
  );
});

export default IconBase;
