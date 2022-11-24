import { memo } from 'react';

import { Button, Badge } from 'antd';

import styled, { StyledProp, cx, css } from '../../../styled';
import { useMediaQueryDown } from '../../../ThemeProvider/mediaQuery/useMediaQuery';

export type ActionProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * If `true`, the item will be highlighted.
     */
    active?: boolean;
    icon: React.ReactNode;
    label?: React.ReactNode;
    badgeCount?: number;
    badgeDot?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  };

const Action: React.FC<ActionProps> = ({ active, icon, label, onClick, className, badgeCount, badgeDot, ...rest }) => {
  const hideLabel = useMediaQueryDown('md');
  label = hideLabel ? undefined : label;

  return (
    <div className={cx(className, { '--hst-active': active })} onClick={onClick} {...rest}>
      <Badge count={badgeCount} dot={badgeDot} offset={[-4, 8]}>
        <Button shape={!label ? 'circle' : 'round'} icon={icon} type='text'>
          {label}
        </Button>
      </Badge>
    </div>
  );
};
export default styled(memo(Action), { label: 'hst-topbar-action' })(
  ({ theme }) => css`
    & .anticon {
      font-size: 20px;
      vertical-align: text-bottom;
    }

    button {
      color: ${theme.antd.colorText};
      margin-top: 2px;
    }

    &.--hst-active button {
      background-color: ${theme.antd.colorBgTextHover};
    }
  `
);
