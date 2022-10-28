import styled, { StyledProp, css } from '@eduzz/houston-ui/styled';

import Typography from '../../../../Typography';

export type UserMenuGroupProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    label: string;
    children: React.ReactNode;
  };

const UserMenuGroup = ({ label, className, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className={className} {...rest}>
      <Typography size='xxs' weight='semibold' className='hst-topbar-user-menu-group-label'>
        {label}
      </Typography>

      {children}
    </div>
  );
};

export default styled(UserMenuGroup, { label: 'hst-topbar-user-menu-group' })(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    & > .hst-topbar-user-menu-group-label {
      margin-top: 0.5rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      cursor: default;
    }
  `
);
