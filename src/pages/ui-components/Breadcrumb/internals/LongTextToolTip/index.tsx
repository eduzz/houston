import * as React from 'react';

import Tooltip from '../../../Tooltip';

export interface LongTextToolTip {
  children: React.ReactNode;
}

const LongTextToolTip = ({ children }: LongTextToolTip) => {
  if (typeof children === 'string' && children.length > 32) {
    return (
      <Tooltip placement='bottom' title={children}>
        <span className='hst-breadcrumb-text'>{children.slice(0, 32) + ' ...'}</span>
      </Tooltip>
    );
  }

  return <span className='hst-breadcrumb-text'>{children}</span>;
};

export default React.memo(LongTextToolTip);
