import * as React from 'react';

import Typography, { ITypographyProps } from '../../Typography';

type ListTitleProps = 'id' | 'className';

export interface IListTitleProps extends Pick<ITypographyProps, ListTitleProps> {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
}

const ListText: React.FC<IListTitleProps> = ({ title, subtitle, ...props }) => {
  return (
    <div className='list-item-text'>
      {typeof title === 'string' ? (
        <Typography {...props} size='xs' fontWeight='regular' lineHeight='compact'>
          {title}
        </Typography>
      ) : (
        title
      )}
      {typeof subtitle === 'string' ? (
        <Typography {...props} size='xxs' fontWeight='regular' lineHeight='compact'>
          {subtitle}
        </Typography>
      ) : (
        subtitle
      )}
    </div>
  );
};

export default React.memo(ListText);
