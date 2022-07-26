import * as React from 'react';

import { StyledProp } from '@eduzz/houston-styles';

export interface TabProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  label: string;
}

export default (() => null) as React.FC<TabProps>;
