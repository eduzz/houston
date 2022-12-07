import { forwardRef, memo, useEffect } from 'react';

import { Button, Badge, Tooltip } from 'antd';

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
    tooltip?: string;
    icon: React.ReactNode;
    label?: React.ReactNode;
    badgeCount?: number;
    badgeDot?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  };

const Action = forwardRef<HTMLDivElement, ActionProps>(
  ({ active, icon, label, onClick, className, tooltip, badgeCount, badgeDot, ...rest }, ref) => {
    const registerAction = useContext(TopbarActionsContext);

    const hideLabel = useMediaQueryDown('md');
    label = hideLabel ? undefined : label;

    useEffect(() => {
      const unregister = registerAction({ badgeCount: badgeCount ?? 0, badgeDot: badgeDot ?? false });
      return () => unregister();
    }, [badgeCount, badgeDot, registerAction]);

    return (
      <div className={cx(className, { '--hst-active': active })} onClick={onClick} {...rest} ref={ref}>
        <Tooltip title={tooltip}>
          <Badge count={badgeCount === 0 ? undefined : badgeCount} dot={badgeCount ? false : badgeDot} offset={[-4, 8]}>
            <Button shape={!label ? 'circle' : 'round'} icon={icon} type='text'>
              {label}
            </Button>
          </Badge>
        </Tooltip>
      </div>
    );
  }
);

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
