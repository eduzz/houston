import * as React from 'react';

import { StyledProp } from '@eduzz/houston-styles';

export interface StepProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  error?: boolean;
  label: string;
  description?: string;
}

export default (() => null) as React.FC<StepProps>;
