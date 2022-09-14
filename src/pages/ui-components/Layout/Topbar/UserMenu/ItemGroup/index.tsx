import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Typography from '../../../../Typography';

export type UserMenuGroupProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    label: string;
    children: React.ReactNode;
  };

const UserMenuGroup = ({ label, className, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className={className} {...rest}>
      <Typography size='xxs' weight='semibold' className='houston-topbar-user-menu-group__label'>
        {label}
      </Typography>
      {children}
    </div>
  );
};

export default styled(UserMenuGroup, { label: 'houston-topbar-user-menu-group' })(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    & > .houston-topbar-user-menu-group__label {
      margin-top: ${theme.spacing.nano};
      padding: ${theme.spacing.squish.xxs};
      cursor: default;
    }
  `
);
