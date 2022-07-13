import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import usePromise from '@eduzz/houston-hooks/usePromise';
import AppsIcon from '@eduzz/houston-icons/Apps';
import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import useOnClickOutside from '../../../hooks/useClickOutside';
import { useEscapeKey } from '../../../hooks/useEscapeKey';
import { TOOLBAR_HEIGHT } from '../../context';
import ToolbarContext from '../context';
import Dropdown from './Dropdown';

export interface ToolbarApplication {
  application: string;
  label: string;
  icon: string;
  beta?: boolean;
  description?: string;
  url: string;
}

const ToolbarApps = React.memo<IStyledProp>(({ className }) => {
  const isSupport = useContextSelector(ToolbarContext, context => context.user?.isSupport ?? false);
  const currentApplication = useContextSelector(ToolbarContext, context => context.currentApplication);

  const [openedDropdown, toogleDropdown, , closeDropdown] = useBoolean();
  const wrapperDropdownRef = React.useRef<HTMLDivElement>(null);

  const [applications] = usePromise(async () => {
    const request = await fetch('https://eduzz-houston.s3.amazonaws.com/toolbar/applications.json');

    const applications: ToolbarApplication[] = await request.json();

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
        <div className={cx('houston-toolbar-apps__button', openedDropdown && '--active')} onClick={toogleDropdown}>
          <AppsIcon size={24} />
        </div>

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

export default styled(ToolbarApps, { label: 'houston-toolbar-apps' })(
  ({ theme }) => css`
    width: auto;
    position: relative;
    box-sizing: border-box;

    .houston-toolbar-apps__button {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 ${theme.spacing.xxxs};
      transition: 0.15s ease-out;
      height: ${TOOLBAR_HEIGHT}px;

      &:hover,
      &.--active {
        background: rgba(0, 0, 0, 0.15);
      }
    }
  `
);
