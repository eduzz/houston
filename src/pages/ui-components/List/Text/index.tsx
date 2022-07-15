import { cx } from '@eduzz/houston-styles';

import Typography, { ITypographyProps } from '../../Typography';

type ListTitleProps = 'id' | 'className';

export interface IListTitleProps extends Pick<ITypographyProps, ListTitleProps> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /**
   * Default `false`
   */
  disableTypography?: boolean;
}

const ListText = ({ title, description, disableTypography = false, className, ...rest }: IListTitleProps) => (
  <div className={cx('houston-list-item-text', className)} {...rest}>
    {!disableTypography ? (
      <Typography size='xs' weight='semibold' lineHeight='lg'>
        {title}
      </Typography>
    ) : (
      title
    )}

    {!disableTypography && !!description ? (
      <Typography size='xxs' weight='regular' lineHeight='md'>
        {description}
      </Typography>
    ) : (
      description
    )}
  </div>
);

export default ListText;
