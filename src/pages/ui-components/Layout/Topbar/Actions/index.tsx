import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import IconChevronLeft from '@eduzz/houston-icons/ChevronLeft';
import IconChevronRight from '@eduzz/houston-icons/ChevronRight';
import styled, { css, cx } from '@eduzz/houston-styles/styled';

import useClickOutside from '../../../hooks/useClickOutside';
import Action from '../Action';
import TopbarContext from '../context';
import TopbarActionsContext, { TopbarActionsContextType } from './context';

interface ActionsProps {
  children: React.ReactNode;
  className?: string;
}

const Actions = ({ children, className }: ActionsProps) => {
  const [actions, setActions] = React.useState<Parameters<TopbarActionsContextType>[0][]>([]);
  const [expanded, toggleExpanded, , closeExpanded] = useBoolean(false);

  const ref = React.useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeExpanded, []);

  const hasUser = useContextSelector(TopbarContext, context => !!context.user);

  const registerAction: TopbarActionsContextType = React.useCallback(action => {
    setActions(actions => [...actions, action]);

    return () => setActions(actions => actions.filter(a => a !== action));
  }, []);

  const badgeCount = React.useMemo(() => actions.reduce((acc, a) => acc + a.badgeCount, 0), [actions]);
  const badgeDot = React.useMemo(() => actions.some(a => a.badgeDot), [actions]);
  return (
    <div
      ref={ref}
      className={cx(className, {
        '--hts-enabled': actions.length > 1,
        '--hst-has-user': hasUser,
        '--hst-expanded': expanded
      })}
    >
      <div className='hst-topbar-actions-content'>
        <Action
          badgeCount={expanded ? 0 : badgeCount}
          badgeDot={expanded ? false : badgeDot}
          className='hst-topbar-actions-content-expand'
          icon={expanded ? <IconChevronRight size={19} /> : <IconChevronLeft size={19} />}
          onClick={toggleExpanded}
        />
        <TopbarActionsContext.Provider value={registerAction}>
          <div className='hst-topbar-actions-content-icons'>{children}</div>
        </TopbarActionsContext.Provider>
      </div>
    </div>
  );
};

export default styled(React.memo(Actions), { label: 'hst-topbar-actions' })(
  ({ theme }) => css`
    .hst-topbar-actions-content,
    .hst-topbar-actions-content-icons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
    }

    .hst-topbar-actions-content-expand {
      display: none;
    }

    &.--hts-enabled {
      ${theme.mediaQuery.down('xs')} {
        .hst-topbar-actions-content-expand {
          display: block;
        }

        .hst-topbar-actions-content {
          height: calc(64px - 3px);
          background-color: ${theme.hexToRgba('black', 0.8)};
          backdrop-filter: blur(0.5rem);
          -webkit-backdrop-filter: blur(0.5rem);
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 8px;
        }

        .hst-topbar-actions-content-icons {
          width: 0;
          opacity: 0;
          transition: 0.3s;
          pointer-events: none;
        }

        &.--hst-has-user .hst-topbar-actions-content {
          right: 40px;
          padding: 0;
        }

        &.--hst-expanded {
          .hst-topbar-actions-content-icons {
            width: calc(100vw - 65px);
            opacity: 1;
            pointer-events: all;
            margin-right: 8px;
          }

          &.--hst-has-user .hst-topbar-actions-content-icons {
            width: calc(100vw - 100px);
          }
        }
      }
    }
  `
);
