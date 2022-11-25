import { memo, useEffect } from 'react';

import { Button, Badge } from 'antd';

import { useContext } from 'use-context-selector';

import styled, { StyledProp, cx, css } from '../../../styled';
import { useMediaQueryDown } from '../../../ThemeProvider/mediaQuery/useMediaQuery';
import TopbarActionsContext from '../Actions/context';

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
  const registerAction = useContext(TopbarActionsContext);

  const hideLabel = useMediaQueryDown('md');
  label = hideLabel ? undefined : label;

  useEffect(() => {
    const unregister = registerAction({ badgeCount: badgeCount ?? 0, badgeDot: badgeDot ?? false });
    return () => unregister();
  }, [badgeCount, badgeDot, registerAction]);

  return (
    <div className={cx(className, { '--hst-active': active })} onClick={onClick} {...rest}>
      <Badge count={badgeCount === 0 ? undefined : badgeCount} dot={badgeCount ? false : badgeDot} offset={[-4, 8]}>
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
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.--hst-active button {
      background-color: ${theme.antd.colorBgTextHover};
    }
  `
);
