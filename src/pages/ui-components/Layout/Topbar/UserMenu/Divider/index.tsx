import styled, { StyledProp, css } from '@eduzz/houston-styles';

import Divider, { DividerProps } from '../../../../Divider';

type UserMenuDividerProps = StyledProp & DividerProps;

const UserMenuDivider: React.FC<StyledProp> = (props: UserMenuDividerProps) => {
  return <Divider {...props} />;
};

export default styled(UserMenuDivider, { label: 'houston-topbar-user-menu-divider' })(
  ({ theme }) => css`
    &.--horizontal {
      margin: ${theme.spacing.nano} -8px;
      width: calc(100% + 16px);
    }
  `
);
