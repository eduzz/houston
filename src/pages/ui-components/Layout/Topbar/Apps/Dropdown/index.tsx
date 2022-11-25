import * as React from 'react';

import { FullscreenOutlined } from '@ant-design/icons';
import { Typography, Button, Spin } from 'antd';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import { TopbarApplication } from '..';
import IconClose from '../../../../Icons/Close';
import styled, { css, StyledProp, cx, keyframes } from '../../../../styled';
import { TOPBAR_DROPDOWN_WIDTH } from '../../../context';

export type AppsDropdownProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    currentApplication: string | undefined;
    applications: TopbarApplication[] | undefined;
    opened: boolean;
    onClose: () => void;
  };

const AppsDropdown = React.memo<AppsDropdownProps>(
  ({ currentApplication, applications, className, opened, onClose, ...rest }) => {
    const [expanded, toggleExpanded, , closeExpanded] = useBoolean();

    React.useEffect(() => {
      const oldValue = document.body.style.overflow;
      document.body.style.overflow = expanded ? 'hidden' : oldValue;

      return () => {
        document.body.style.overflow = oldValue;
      };
    }, [expanded]);

    React.useEffect(() => {
      if (opened) return;
      closeExpanded();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [opened]);

    return (
      <div
        className={cx(className, {
          'hst-topbar-apps-dropdown-opened': opened,
          'hst-topbar-apps-dropdown-expanded': expanded
        })}
        {...rest}
      >
        <div className='hst-topbar-apps-dropdown-header'>
          <Typography.Title level={5}>Lista de Apps</Typography.Title>
          <Button icon={<IconClose size={18} />} shape='circle' type='text' onClick={toggleExpanded} />
        </div>

        <div className='hst-topbar-apps-dropdown-list-apps'>
          {!applications?.length && (
            <div className='hst-topbar-apps-dropdown-loader'>
              <Spin />
            </div>
          )}

          {applications?.map(app => {
            const isCurrent = app.application === currentApplication;

            return (
              <a
                className={cx('hst-topbar-apps-dropdown-item', isCurrent && 'hst-topbar-apps-dropdown-current')}
                key={app.application}
                href={isCurrent ? undefined : app.url}
                rel='noopener noreferrer'
                target='_blank'
                onClick={isCurrent ? onClose : undefined}
              >
                <img src={app.icon} className='hst-topbar-apps-dropdown-icon' />

                <Typography className='hst-topbar-apps-dropdown-label'>{app.label}</Typography>
                <Typography className='hst-topbar-apps-dropdown-description'>{app.description}</Typography>
              </a>
            );
          })}
        </div>

        {!!applications?.length && (
          <div className='hst-topbar-apps-dropdown-expand'>
            <Button icon={<FullscreenOutlined />} type='text' block onClick={toggleExpanded}>
              Expandir
            </Button>
          </div>
        )}
      </div>
    );
  }
);

const descriptionAnimation = keyframes`
  0% { text-indent: -1000px; }
  100% {  text-indent: 0px; }
`;

export default styled(AppsDropdown, { label: 'hst-topbar-apps-dropdown' })(
  ({ theme }) => css`
    width: ${theme.pxToRem(TOPBAR_DROPDOWN_WIDTH)}rem;
    position: fixed;
    background: ${theme.antd.colorBgElevated};
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.16);
    top: ${theme.pxToRem(theme.components.topBarHeight)}rem;
    left: 0.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
    z-index: 105;
    transition: 0.15s ease-in-out;
    opacity: 0;
    visibility: hidden;
    user-select: none;
    box-sizing: border-box;
    transform: scale(0.1);
    transform-origin: top left;
    max-height: calc(100vh - ${theme.pxToRem(theme.components.topBarHeight)}rem);
    overflow-y: auto;

    ${theme.mediaQuery.down('sm')} {
      width: 100%;
      left: 0;
    }

    &.hst-topbar-apps-dropdown-opened {
      opacity: 1;
      transform: scale(1);
      visibility: visible;
      user-select: initial;
    }

    .hst-topbar-apps-dropdown-header {
      display: none;
    }

    .hst-topbar-apps-dropdown-expand button {
      height: 50px;
    }

    .hst-topbar-apps-dropdown-list-apps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.5rem 0.5rem;
      flex-wrap: wrap;
      justify-items: center;
      box-sizing: border-box;
      padding: 1rem;

      .hst-topbar-apps-dropdown-loader {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 4;
        padding: 3rem;
      }

      .hst-topbar-apps-dropdown-item {
        width: 100%;
        text-align: center;
        transition: 0.15s ease-out;
        border-radius: 0.25rem;
        cursor: pointer;
        text-decoration: none;
        padding: 1rem 0.5rem;
        display: block;

        .hst-topbar-apps-dropdown-icon {
          max-width: ${theme.pxToRem(40)}rem;
          max-height: ${theme.pxToRem(40)}rem;
          margin-bottom: 0.5rem;
        }

        .hst-topbar-apps-dropdown-description {
          display: none;
          overflow: hidden;
          opacity: 0.8;
          font-size: 16px;
          color: ${theme.antd.colorTextDescription};
          margin-top: 2px;

          ${theme.mediaQuery.up('md')} {
            text-indent: -1000px;
            animation: ${descriptionAnimation} 0.2s ease-in-out forwards;
            animation-delay: 0s;
          }
        }

        &.hst-topbar-apps-dropdown-current {
          background: rgba(0, 0, 0, 0.04);
        }

        &:hover {
          background: rgba(0, 0, 0, 0.04);
        }
      }
    }

    &.hst-topbar-apps-dropdown-expanded {
      width: 100%;
      left: 0;
      height: calc(100% - ${theme.components.topBarHeight}px);
      overflow-x: auto;
      box-shadow: none;
      border-radius: 0;

      .hst-topbar-apps-dropdown-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.5rem 2rem;
        border-bottom: 1px solid ${theme.hexToRgba('#000000', 0.12)};

        button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .hst-topbar-apps-dropdown-expand {
        display: none;
      }

      .hst-topbar-apps-dropdown-list-apps {
        padding: 0;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0;

        .hst-topbar-apps-dropdown-item {
          height: 100%;
          display: grid;
          grid-template-columns: ${theme.pxToRem(25)}rem 1fr;
          grid-template-rows: ${theme.pxToRem(25)}rem auto;
          grid-gap: 0.5rem;
          text-align: left;
          padding: 1.5rem;
          border-bottom: 1px solid ${theme.hexToRgba('#000000', 0.12)};
          align-items: center;

          .hst-topbar-apps-dropdown-icon {
            max-width: ${theme.pxToRem(25)}rem;
            max-height: ${theme.pxToRem(25)}rem;
            grid-column: 1;
            grid-row: 1;
            margin-bottom: 0;
          }

          .hst-topbar-apps-dropdown-label {
            font-size: 16px;
            grid-column: 2;
            grid-row: 1;
          }

          .hst-topbar-apps-dropdown-description {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row: 2;
            display: block;
          }
        }

        ${theme.mediaQuery.up('md')} {
          padding: 2rem;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1.5rem;

          .hst-topbar-apps-dropdown-item {
            margin: auto;
            border: 1px solid ${theme.hexToRgba('#000000', 0.12)};
            grid-template-columns: ${theme.pxToRem(60)}rem 1fr;
            grid-template-rows: ${theme.pxToRem(20)}rem auto;
            padding: 1rem;
            grid-gap: 0.25rem;
            align-items: start;

            .hst-topbar-apps-dropdown-icon {
              grid-row-start: 1;
              grid-row-end: 3;
              max-width: ${theme.pxToRem(50)}rem;
              max-height: ${theme.pxToRem(50)}rem;
            }

            .hst-topbar-apps-dropdown-description {
              grid-column-start: 2;
              grid-column-end: 2;
            }
          }
        }

        ${theme.mediaQuery.up('lg')} {
          grid-template-columns: repeat(3, 1fr);
        }

        ${theme.mediaQuery.up('xl')} {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  `
);
