import { cx } from '@eduzz/houston-styles';

import Typography, { TypographyProps } from '../../Typography';

export interface ListTitleProps
  extends Pick<TypographyProps, 'className'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /**
   * Default `false`
   */
  disableTypography?: boolean;
}

const ListText = ({ title, description, disableTypography = false, className, ...rest }: ListTitleProps) => (
  <div className={cx('hst-list-item-text', className)} {...rest}>
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

/**
 * @deprecated Use List from Antd
 * https://ant.design/components/list/
 */
export default ListText;
