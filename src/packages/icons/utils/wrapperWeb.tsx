import * as React from 'react';

import { IconWebBase } from '../interfaces';
import getIconSize from './getIconSize';

const IconBase = React.memo<IconWebBase>(({ children, size, className, ...rest }) => {
  const child = React.useMemo(
    () => React.cloneElement(children as React.ReactElement, { width: getIconSize(size) }),
    [children, size]
  );

  const style = React.useMemo(() => ({ width: getIconSize(size), height: getIconSize(size) }), [size]);

  return (
    <span className={`houston-icon ${className ? className : ''}`} style={style} {...rest}>
      {child}
    </span>
  );
});

export default IconBase;
