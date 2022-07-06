import * as React from 'react';

import styled from '@eduzz/houston-styles/styled';

import Typography, { ITypographyProps } from '../../Typography';

type ListTitleProps = 'id' | 'className';

export interface IListTitleProps extends Pick<ITypographyProps, ListTitleProps> {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
}

const ListText = ({ title, subtitle, className, ...props }: IListTitleProps) => {
  return (
    <div className={className}>
      {typeof title === 'string' ? (
        <Typography {...props} size='xs' weight='semibold' lineHeight='lg'>
          {title}
        </Typography>
      ) : (
        title
      )}
      {typeof subtitle === 'string' ? (
        <Typography {...props} size='xxs' weight='regular' lineHeight='md'>
          {subtitle}
        </Typography>
      ) : (
        subtitle
      )}
    </div>
  );
};

export default React.memo(styled(ListText, { label: 'houston-list-text' })());
