import * as React from 'react';

import Tooltip from '../../../Tooltip';

export interface ILongTextToolTip {
  children: React.ReactNode;
}

const LongTextToolTip = ({ children }: ILongTextToolTip) => {
  if (typeof children === 'string' && children.length > 32) {
    return (
      <Tooltip placement='bottom' title={children}>
        <span className='__text'>{children.slice(0, 32) + ' ...'}</span>
      </Tooltip>
    );
  }

  return <span className='__text'>{children}</span>;
};

export default React.memo(LongTextToolTip);
