import styled, { IStyledProp, css } from '@eduzz/houston-styles';

import Divider from '../../../../Divider';

const UserMenuDivider: React.FC<IStyledProp> = ({ className }) => {
  return <Divider className={className} />;
};

export default styled(UserMenuDivider, { label: 'houston-topbar-user-menu-divider' })(
  ({ theme }) => css`
    margin: ${theme.spacing.quarck} 0;
  `
);
