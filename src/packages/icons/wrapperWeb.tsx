import * as React from 'react';

import { IIconWebBase } from './interfaces';
import getIconSize from './utils/getIconSize';

const IconBase = React.memo<IIconWebBase>(({ children, size, ...rest }) => {
  const child = React.useMemo(
    () =>
      React.cloneElement(children as React.ReactElement, {
        width: getIconSize(size)
      }),
    [children, size]
  );

  return (
    <span className='houston-icon' {...rest}>
      {child}
    </span>
  );
});

export default IconBase;
