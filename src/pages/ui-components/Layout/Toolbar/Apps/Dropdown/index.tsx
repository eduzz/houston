import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import CancelIcon from '@eduzz/houston-icons/Cancel';
import ExpandIcon from '@eduzz/houston-icons/Expand';
import styled, { css, IStyledProp, cx } from '@eduzz/houston-styles';

import { ToolbarApplication } from '..';
import Spinner from '../../../../Spinner';
import Typography from '../../../../Typography';
import { TOOLBAR_DROPDOWN_WIDTH, TOOLBAR_HEIGHT } from '../../../context';

export interface AppsDropdownProps extends IStyledProp {
  currentApplication: string;
  applications: ToolbarApplication[];
  opened: boolean;
  onClose: () => void;
}

const AppsDropdown = React.memo<AppsDropdownProps>(
  ({ currentApplication, applications, className, opened, onClose }) => {
    const [expanded, toggleExpanded, , closeExpanded] = useBoolean();

    React.useEffect(() => {
      document.body.style.overflow = expanded ? 'hidden' : null;
      return () => (document.body.style.overflow = null);
    }, [expanded]);

    React.useEffect(() => {
      if (opened) return;
      closeExpanded();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [opened]);

    return (
      <div className={cx(className, { '--opened': opened, '--expanded': expanded })}>
        <div className='houston-toolbar-apps-dropdown__header'>
          <div className='houston-toolbar-apps-dropdown__title'>Lista de Apps</div>

          <div className='houston-toolbar-apps-dropdown__button-close' onClick={toggleExpanded}>
            Esc <CancelIcon />
          </div>
        </div>

        <div className='houston-toolbar-apps-dropdown__list-apps'>
          {!applications?.length && (
            <div className='houston-toolbar-apps-dropdown__loader'>
              <Spinner size={40} />
            </div>
          )}
          {applications?.map(app => {
            const isCurrent = app.application === currentApplication;

            return (
              <a
                className={cx('houston-toolbar-apps-dropdown__item', isCurrent && '--current')}
                key={app.application}
                href={isCurrent ? undefined : app.url}
                rel='noopener noreferrer'
                target='_blank'
                onClick={isCurrent ? onClose : undefined}
              >
                <img src={app.icon} className='houston-toolbar-apps-dropdown__icon' />

                <Typography size={expanded ? 'xs' : 'xxs'} marginBottom={expanded}>
                  {app.label}
                </Typography>
                <Typography
                  size='xxs'
                  color='neutralColor.low.medium'
                  lineHeight='lg'
                  className='houston-toolbar-apps-dropdown__description'
                >
                  {app.description}
                </Typography>
              </a>
            );
          })}
        </div>

        {!!applications?.length && (
          <div className='houston-toolbar-apps-dropdown__expand'>
            <span onClick={toggleExpanded}>
              <ExpandIcon /> Expandir
            </span>
          </div>
        )}
      </div>
    );
  }
);

export default styled(AppsDropdown, { label: 'houston-toolbar-apps-dropdown' })(
  ({ theme }) => css`
    width: ${TOOLBAR_DROPDOWN_WIDTH}px;
    position: fixed;
    padding: ${theme.spacing.nano};
    background: #fff;
    box-shadow: ${theme.shadow.level[1]};
    top: ${TOOLBAR_HEIGHT}px;
    left: 0;
    border-radius: 0 0 ${theme.spacing.nano} ${theme.spacing.nano};
    z-index: 1099;
    transition: 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
    user-select: none;
    box-sizing: border-box;
    transform: scale(0.1);
    transform-origin: top left;

    ${theme.breakpoints.down('sm')} {
      width: 100%;
      left: 0;
    }

    &.--opened {
      opacity: 1;
      transform: scale(1);
      visibility: visible;
      user-select: initial;
    }

    .houston-toolbar-apps-dropdown__header {
      display: none;
    }

    .houston-toolbar-apps-dropdown__list-apps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: ${theme.spacing.nano};
      flex-wrap: wrap;
      justify-items: center;
      box-sizing: border-box;

      .houston-toolbar-apps-dropdown__loader {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 4;
        padding: ${theme.spacing.md};
      }

      .houston-toolbar-apps-dropdown__item {
        width: 100%;
        text-align: center;
        transition: 0.15s ease-out;
        border-radius: ${theme.spacing.quarck};
        text-decoration: none;
        cursor: pointer;
        text-decoration: none;
        padding: ${theme.spacing.xxxs} ${theme.spacing.nano};
        display: block;

        .houston-toolbar-apps-dropdown__icon {
          max-width: 40px;
          max-height: 40px;
          margin-bottom: ${theme.spacing.quarck};
        }

        .houston-toolbar-apps-dropdown__description {
          display: none;
        }

        &.--current {
          background: rgba(0, 0, 0, 0.04);
        }

        &:hover {
          background: rgba(0, 0, 0, 0.04);
        }
      }
    }

    .houston-toolbar-apps-dropdown__expand {
      text-align: center;

      span:not(.houston-icon) {
        display: flex;
        align-items: center;
        font-size: 13px;
        cursor: pointer;
        color: ${theme.brandColor.primary.pure};
        justify-content: center;
        transition: 0.15s ease-out;
        border-radius: ${theme.spacing.quarck};
        padding: ${theme.spacing.nano} 0;
        font-weight: 500;

        &:hover {
          background: rgba(0, 0, 0, 0.04);
        }

        .houston-icon {
          margin-right: ${theme.spacing.nano};
        }
      }
    }

    &.--expanded {
      width: 100%;
      height: calc(100% - ${TOOLBAR_HEIGHT}px);
      padding: ${theme.spacing.sm};
      overflow-x: auto;

      ${theme.breakpoints.down('md')} {
        padding: ${theme.spacing.xxxs};
      }

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.nano};
      }

      .houston-toolbar-apps-dropdown__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: ${theme.spacing.xxs};

        ${theme.breakpoints.down('md')} {
          padding-bottom: ${theme.spacing.xxxs};
        }

        ${theme.breakpoints.down('sm')} {
          padding-bottom: ${theme.spacing.quarck};
        }

        .houston-toolbar-apps-dropdown__title {
          color: #37474f;
          font-weight: 500;
        }

        .houston-toolbar-apps-dropdown__button-close {
          color: ${theme.brandColor.primary.pure};
          font-weight: 500;
          display: flex;
          align-items: center;
          padding: ${theme.spacing.nano} ${theme.spacing.xxxs};
          border-radius: ${theme.spacing.quarck};
          transition: 0.15s ease-out;
          cursor: pointer;

          &:hover {
            background: rgba(0, 0, 0, 0.05);
          }

          span.houston-icon {
            margin-left: ${theme.spacing.quarck};
          }
        }
      }

      .houston-toolbar-apps-dropdown__list-apps {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: ${theme.spacing.sm};

        ${theme.breakpoints.down('xlg')} {
          grid-template-columns: repeat(3, 1fr);
        }

        ${theme.breakpoints.down('lg')} {
          grid-template-columns: repeat(2, 1fr);
        }

        ${theme.breakpoints.down('md')} {
          grid-gap: ${theme.spacing.xxs};
        }

        ${theme.breakpoints.down('sm')} {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: ${theme.spacing.nano};
        }
      }

      .houston-toolbar-apps-dropdown__item {
        text-align: left;
        padding: ${theme.spacing.xxs};

        .houston-toolbar-apps-dropdown__icon {
          margin: auto;
          margin-bottom: ${theme.spacing.nano};
          text-align: center;
          max-width: 80px;
          max-height: 80px;
          display: block;
        }

        .houston-toolbar-apps-dropdown__description {
          display: block;
        }
      }

      .houston-toolbar-apps-dropdown__expand {
        display: none;
      }
    }
  `
);
