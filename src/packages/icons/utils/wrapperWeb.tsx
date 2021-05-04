import * as React from 'react';

import clsx from 'clsx';

import { IconWebBase } from '../interfaces';
import getIconSize from './getIconSize';

const IconBase = React.memo<IconWebBase>(({ children, size, className, ...rest }) => {
  const child = React.useMemo(
    () =>
      React.cloneElement(children as React.ReactElement, {
        width: getIconSize(size)
      }),
    [children, size]
  );

  return (
    <span className={clsx('houston-icon', className)} {...rest}>
      {child}
    </span>
  );
});

export default IconBase;
