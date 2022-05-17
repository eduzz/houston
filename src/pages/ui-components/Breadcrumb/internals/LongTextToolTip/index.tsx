import * as React from 'react';

import Tooltip from '@eduzz/houston-ui/Tooltip';

export interface ILongTextToolTip {
  children: React.ReactNode;
}

const LongTextToolTip = ({ children }: ILongTextToolTip) => (
  <>
    {typeof children === 'string' && children.length > 32 ? (
      <Tooltip placement='bottom' title={children}>
        <span className='__text'>{children.slice(0, 32) + ' ...'}</span>
      </Tooltip>
    ) : (
      <span className='__text'>{children}</span>
    )}
  </>
);

export default React.memo(LongTextToolTip);
