import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import CancelIcon from '@eduzz/houston-icons/Cancel';
import ExpandIcon from '@eduzz/houston-icons/Expand';
import styled, { css, StyledProp, cx } from '@eduzz/houston-styles';

import { TopbarApplication } from '..';
import Button from '../../../../Button';
import Divider from '../../../../Divider';
import IconButton from '../../../../IconButton';
import Spinner from '../../../../Loaders/Spinner';
import Typography from '../../../../Typography';
import { TOPBAR_DROPDOWN_WIDTH, TOPBAR_HEIGHT } from '../../../context';

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
          <Typography weight='bold'>Lista de Apps</Typography>

          <IconButton onClick={toggleExpanded}>
            <CancelIcon />
          </IconButton>
        </div>

        <div className='hst-topbar-apps-dropdown-list-apps'>
          {!applications?.length && (
            <div className='hst-topbar-apps-dropdown-loader'>
              <Spinner size={40} />
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

                <Typography
                  lineHeight='default'
                  className='hst-topbar-apps-dropdown-label'
                  size={expanded ? 'xs' : 'xxs'}
                >
                  {app.label}
                </Typography>
                <Typography size='xs' color='neutralColor.low.medium' className='hst-topbar-apps-dropdown-description'>
                  {app.description}
                </Typography>
              </a>
            );
          })}
        </div>

        {!!applications?.length && (
          <div className='hst-topbar-apps-dropdown-expand'>
            <Divider />

            <div className='hst-topbar-apps-dropdown-expand-button'>
              <Button startIcon={<ExpandIcon />} variant='text' color='inherit' fullWidth onClick={toggleExpanded}>
                Expandir
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default styled(AppsDropdown, { label: 'hst-topbar-apps-dropdown' })(
  ({ theme }) => css`
    width: ${theme.pxToRem(TOPBAR_DROPDOWN_WIDTH)}rem;
    position: fixed;
    background: ${theme.neutralColor.high.pure};
    box-shadow: ${theme.shadow.level[2]};
    top: ${theme.pxToRem(TOPBAR_HEIGHT)}rem;
    left: ${theme.spacing.inline.nano};
    border-radius: 0 0 ${theme.border.radius.sm} ${theme.border.radius.sm};
    z-index: 105;
    opacity: 0;
    visibility: hidden;
    user-select: none;
    box-sizing: border-box;
    transform: scale(0.1);
    max-height: calc(100vh - ${theme.pxToRem(TOPBAR_HEIGHT)}rem);
    overflow-y: auto;

    ${theme.breakpoints.down('sm')} {
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

    .hst-topbar-apps-dropdown-list-apps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: ${theme.spacing.stack.nano} ${theme.spacing.inline.nano};
      flex-wrap: wrap;
      justify-items: center;
      box-sizing: border-box;
      padding: ${theme.spacing.inset.xs};

      .hst-topbar-apps-dropdown-loader {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 4;
        padding: ${theme.spacing.md};
      }

      .hst-topbar-apps-dropdown-item {
        width: 100%;
        text-align: center;
        border-radius: ${theme.border.radius.xs};
        cursor: pointer;
        text-decoration: none;
        padding: ${theme.spacing.xxxs} ${theme.spacing.nano};
        display: block;

        .hst-topbar-apps-dropdown-icon {
          max-width: ${theme.pxToRem(40)}rem;
          max-height: ${theme.pxToRem(40)}rem;
          margin-bottom: ${theme.spacing.nano};
        }

        .hst-topbar-apps-dropdown-description {
          display: none;
          overflow: hidden;
        }

        &.hst-topbar-apps-dropdown-current {
          background: rgba(0, 0, 0, 0.04);
        }

        &:hover {
          background: rgba(0, 0, 0, 0.04);
        }
      }
    }

    .hst-topbar-apps-dropdown-expand .hst-topbar-apps-dropdown-expand-button {
      margin: ${theme.spacing.nano};
    }

    &.hst-topbar-apps-dropdown-expanded {
      width: 100%;
      left: 0;
      height: calc(100% - ${TOPBAR_HEIGHT}px);
      overflow-x: auto;
      box-shadow: none;
      border-radius: 0;

      .hst-topbar-apps-dropdown-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: ${theme.spacing.nano} ${theme.spacing.inset.md};
        border-bottom: ${theme.border.width.xs} solid
          ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
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
          grid-gap: ${theme.spacing.nano};
          text-align: left;
          padding: ${theme.spacing.xxs};
          border-bottom: ${theme.border.width.xs} solid
            ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
          align-items: center;

          .hst-topbar-apps-dropdown-icon {
            max-width: ${theme.pxToRem(25)}rem;
            max-height: ${theme.pxToRem(25)}rem;
            grid-column: 1;
            grid-row: 1;
            margin-bottom: 0;
          }

          .hst-topbar-apps-dropdown-label {
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

        ${theme.breakpoints.up('md')} {
          padding: ${theme.spacing.inset.md};
          grid-template-columns: repeat(2, 1fr);
          grid-gap: ${theme.spacing.xxs};

          .hst-topbar-apps-dropdown-item {
            margin: auto;
            border: ${theme.border.width.xs} solid
              ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
            grid-template-columns: ${theme.pxToRem(60)}rem 1fr;
            grid-template-rows: ${theme.pxToRem(20)}rem auto;
            padding: ${theme.spacing.xxxs};
            grid-gap: ${theme.spacing.quarck};
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

        ${theme.breakpoints.up('lg')} {
          grid-template-columns: repeat(3, 1fr);
        }

        ${theme.breakpoints.up('xlg')} {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  `
);
