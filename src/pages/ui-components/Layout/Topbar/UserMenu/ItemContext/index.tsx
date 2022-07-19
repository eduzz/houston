import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Typography from '../../../../Typography';

export interface UserMenuContextProps extends StyledProp {
  children: string;
}

const UserMenuContext: React.FC<UserMenuContextProps> = ({ className, children }) => {
  return (
    <Typography size='xxs' weight='semibold' className={className}>
      {children}
    </Typography>
  );
};

export default styled(UserMenuContext, { label: 'houston-topbar-user-menu-context' })(
  ({ theme }) => css`
    margin-top: ${theme.spacing.nano};
    padding: ${theme.spacing.squish.xxs};
    cursor: default;
  `
);
