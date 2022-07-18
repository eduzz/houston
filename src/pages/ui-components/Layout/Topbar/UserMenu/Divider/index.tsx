import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../../../Divider';

const UserMenuDivider: React.FC<StyledProp> = ({ className }) => {
  return <Divider className={className} />;
};

export default styled(UserMenuDivider, { label: 'houston-topbar-user-menu-divider' })(
  ({ theme }) => css`
    &.--horizontal {
      margin: ${theme.spacing.nano} -8px;
      width: calc(100% + 16px);
    }
  `
);
