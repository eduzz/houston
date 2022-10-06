import * as React from 'react';

import { StyledProp } from '@eduzz/houston-styles';

export interface TabProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  label: string;
}

/**
 * @deprecated Use Tabs from Antd
 * https://ant.design/components/tabs/
 */
export default (() => null) as React.FC<TabProps>;
