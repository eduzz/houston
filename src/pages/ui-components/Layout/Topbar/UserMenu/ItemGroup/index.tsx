import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Typography from '../../../../Typography';

export interface UserMenuGroupProps extends StyledProp {
  label: string;
  children: React.ReactNode;
}

const UserMenuGroup: React.FC<UserMenuGroupProps> = ({ label, className, children }) => {
  return (
    <div className={className}>
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
      margin-top: ${theme.spacing.nano};
      padding: ${theme.spacing.squish.xxs};
      cursor: default;
    }
  `
);
