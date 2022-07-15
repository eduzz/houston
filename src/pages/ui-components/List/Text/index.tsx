import styled from '@eduzz/houston-styles/styled';

import Typography, { ITypographyProps } from '../../Typography';

type ListTitleProps = 'id' | 'className';

export interface IListTitleProps extends Pick<ITypographyProps, ListTitleProps> {
  title: string;
  subtitle?: string;
}

const ListText = ({ title, subtitle, className, ...props }: IListTitleProps) => (
  <div className={className}>
    <Typography {...props} size='xs' weight='semibold' lineHeight='lg'>
      {title}
    </Typography>
    {subtitle && (
      <Typography {...props} size='xxs' weight='regular' lineHeight='md'>
        {subtitle}
      </Typography>
    )}
  </div>
);

export default styled(ListText, { label: 'houston-list-text' })();
