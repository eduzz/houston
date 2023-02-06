import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import usePromise from '@eduzz/houston-hooks/usePromise';

import Dropdown from './Dropdown';
import useClickOutside from '../../../hooks/useClickOutside';
import useEscapeKey from '../../../hooks/useEscapeKey';
import IconApps from '../../../Icons/Apps';
import styled, { StyledProp } from '../../../styled';
import Action from '../Action';
import TopbarContext from '../context';

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

  useClickOutside(wrapperDropdownRef, closeDropdown, []);

  useEscapeKey(() => {
    if (!openedDropdown) return;
    closeDropdown();
  }, [openedDropdown]);

  return (
    <div id={`hst-topbar-apps${id ?? ''}`} ref={wrapperDropdownRef} className={className} {...rest}>
      <Action icon={<IconApps size={19} />} active={openedDropdown} onClick={toogleDropdown} />

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
