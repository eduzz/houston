import * as React from 'react';

export interface LabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return <span>{children}</span>;
};

export default Label;
