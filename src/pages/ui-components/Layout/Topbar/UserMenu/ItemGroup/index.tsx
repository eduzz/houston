import { Typography } from 'antd';

import styled, { StyledProp } from '../../../../styled';

export type UserMenuGroupProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    label: string;
    children: React.ReactNode;
  };

const UserMenuGroup = ({ label, className, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className={className} {...rest}>
      <Typography className='hst-topbar-user-menu-group-label'>{label}</Typography>
      {children}
    </div>
  );
};

export default styled(UserMenuGroup, { label: 'hst-topbar-user-menu-group' })`
  display: flex;
  flex-direction: column;

  & > .hst-topbar-user-menu-group-label {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    cursor: default;
    font-size: 12px;
    font-weight: bold;
  }
`;
