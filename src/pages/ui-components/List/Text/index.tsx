import * as React from 'react';

import Typography, { ITypographyProps } from '../../Typography';

type ListTitleProps = 'id' | 'className';

export interface IListTitleProps extends Pick<ITypographyProps, ListTitleProps> {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
}

const ListText = ({ title, subtitle }: IListTitleProps) => {
  return (
    <div>
      {typeof title === 'string' ? (
        <Typography size='xs' weight='semibold' lineHeight='lg'>
          {title}
        </Typography>
      ) : (
        title
      )}
      {typeof subtitle === 'string' ? (
        <Typography size='xxs' weight='regular' lineHeight='md'>
          {subtitle}
        </Typography>
      ) : (
        subtitle
      )}
    </div>
  );
};

export default React.memo(ListText);
