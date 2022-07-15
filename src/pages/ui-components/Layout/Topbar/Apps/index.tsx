import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import usePromise from '@eduzz/houston-hooks/usePromise';
import AppsIcon from '@eduzz/houston-icons/Apps';
import styled, { IStyledProp } from '@eduzz/houston-styles';

import useOnClickOutside from '../../../hooks/useClickOutside';
import { useEscapeKey } from '../../../hooks/useEscapeKey';
import Action from '../Action';
import TopbarContext from '../context';
import Dropdown from './Dropdown';

export interface TopbarApplication {
  application: string;
  label: string;
  icon: string;
  beta?: boolean;
  description?: string;
  url: string;
}

const TopbarApps = React.memo<IStyledProp>(({ className }) => {
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
    <>
      <div ref={wrapperDropdownRef} className={className}>
        <Action icon={<AppsIcon />} active={openedDropdown} onClick={toogleDropdown} />

        <Dropdown
          applications={applications}
          currentApplication={currentApplication}
          opened={openedDropdown}
          onClose={closeDropdown}
        />
      </div>
    </>
  );
});

export default styled(TopbarApps, { label: 'houston-topbar-apps' })`
  width: auto;
  position: relative;
  box-sizing: border-box;
`;
