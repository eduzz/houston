import { Divider } from 'antd';

import styled, { StyledProp } from '../../../../styled';

const UserMenuDivider = ({ className }: StyledProp) => {
  return <Divider className={className} />;
};

export default styled(UserMenuDivider)`
  margin-top: 7px;
  margin-bottom: 7px;
`;
