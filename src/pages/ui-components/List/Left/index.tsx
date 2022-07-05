import * as React from 'react';

import { cx, IStyledProp } from '@eduzz/houston-styles';

export interface IListLeftProps extends IStyledProp {
  id?: string;
  icon?: React.ReactNode;
  image?: React.ReactNode;
}

const ListLeft = ({ className, icon, image }: IListLeftProps) => {
  return (
    <div className={cx(className)}>
      {icon && <span>{icon}</span>}
      {image && <span>{image}</span>}
    </div>
  );
};

export default React.memo(ListLeft);
