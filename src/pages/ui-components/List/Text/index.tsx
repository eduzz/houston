import * as React from 'react';

import Typography, { ITypographyProps } from '../../Texts/Typography';

type ListTitleProps = 'id' | 'className';

export interface IListTitleProps extends Pick<ITypographyProps, ListTitleProps> {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
}

const ListText: React.FC<IListTitleProps> = ({ title, subtitle, ...props }) => {
  return (
    <div className='list-item-text'>
      {typeof title === 'string' ? (
        <Typography {...props} size='xs' weight='regular' lineHeight='xs'>
          {title}
        </Typography>
      ) : (
        title
      )}
      {typeof subtitle === 'string' ? (
        <Typography {...props} size='xxs' weight='regular' lineHeight='xs'>
          {subtitle}
        </Typography>
      ) : (
        subtitle
      )}
    </div>
  );
};

export default React.memo(ListText);
