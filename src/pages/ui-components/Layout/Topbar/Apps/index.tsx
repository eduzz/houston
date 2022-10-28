import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import usePromise from '@eduzz/houston-hooks/usePromise';

import useOnClickOutside from '../../../hooks/useClickOutside';
import useEscapeKey from '../../../hooks/useEscapeKey';
import styled, { StyledProp } from '../../../styled';
import Action from '../Action';
import TopbarContext from '../context';
import Dropdown from './Dropdown';

export type TopbarApplication = React.HTMLAttributes<HTMLDivElement> & {
  application: string;
  label: string;
  icon: string;
  beta?: boolean;
  description?: string;
  url: string;
};

type TopbarAppsProps = StyledProp & {
  id?: string;
};

const TopbarApps = React.memo<TopbarAppsProps>(({ id, className, ...rest }) => {
  const isSupport = useContextSelector(TopbarContext, context => context.user?.isSupport ?? false);
  const currentApplication = useContextSelector(TopbarContext, context => context.currentApplication);

  const [openedDropdown, toogleDropdown, , closeDropdown] = useBoolean();
  const wrapperDropdownRef = React.useRef<HTMLDivElement>(null);

  const [applications] = usePromise(async () => {
    const request = await fetch('https://eduzz-houston.s3.amazonaws.com/topbar/applications.json');
    const applications: TopbarApplication[] = await request.json();

    return applications.filter(app => {
      if (!app.beta) return true;
      if (isSupport) return true;
      return app.application === currentApplication;
    });
  }, [currentApplication, isSupport]);

  useOnClickOutside(wrapperDropdownRef, closeDropdown, []);

  useEscapeKey(() => {
    if (!openedDropdown) return;
    closeDropdown();
  }, [openedDropdown]);

  return (
    <div id={`hst-topbar-apps${id ?? ''}`} ref={wrapperDropdownRef} className={className} {...rest}>
      <Action
        icon={
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='currentColor' viewBox='0 0 16 16'>
            <path d='M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z' />
          </svg>
        }
        active={openedDropdown}
        onClick={toogleDropdown}
      />

      <Dropdown
        applications={applications}
        currentApplication={currentApplication}
        opened={openedDropdown}
        onClose={closeDropdown}
      />
    </div>
  );
});

export default styled(TopbarApps, { label: 'hst-topbar-apps' })`
  width: auto;
  position: relative;
  box-sizing: border-box;
  height: 100%;
`;
