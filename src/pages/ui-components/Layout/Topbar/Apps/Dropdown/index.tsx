import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import CancelIcon from '@eduzz/houston-icons/Cancel';
import ExpandIcon from '@eduzz/houston-icons/Expand';
import styled, { css, IStyledProp, cx, keyframes } from '@eduzz/houston-styles';

import { TopbarApplication } from '..';
import Spinner from '../../../../Spinner';
import Typography from '../../../../Typography';
import { TOPBAR_DROPDOWN_WIDTH, TOPBAR_HEIGHT } from '../../../context';

export interface AppsDropdownProps extends IStyledProp {
  currentApplication: string | undefined;
  applications: TopbarApplication[] | undefined;
  opened: boolean;
  onClose: () => void;
}

const AppsDropdown = React.memo<AppsDropdownProps>(
  ({ currentApplication, applications, className, opened, onClose }) => {
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
      <div className={cx(className, { '--opened': opened, '--expanded': expanded })}>
        <div className='houston-topbar-apps-dropdown__header'>
          <div className='houston-topbar-apps-dropdown__title'>Lista de Apps</div>

          <div className='houston-topbar-apps-dropdown__button-close' onClick={toggleExpanded}>
            Esc <CancelIcon />
          </div>
        </div>

        <div className='houston-topbar-apps-dropdown__list-apps'>
          {!applications?.length && (
            <div className='houston-topbar-apps-dropdown__loader'>
              <Spinner size={40} />
            </div>
          )}
          {applications?.map(app => {
            const isCurrent = app.application === currentApplication;

            return (
              <a
                className={cx('houston-topbar-apps-dropdown__item', isCurrent && '--current')}
                key={app.application}
                href={isCurrent ? undefined : app.url}
                rel='noopener noreferrer'
                target='_blank'
                onClick={isCurrent ? onClose : undefined}
              >
                <img src={app.icon} className='houston-topbar-apps-dropdown__icon' />

                <Typography size={expanded ? 'xs' : 'xxs'} marginBottom={expanded}>
                  {app.label}
                </Typography>
                <Typography
                  size='xxs'
                  color='neutralColor.low.medium'
                  lineHeight='lg'
                  className='houston-topbar-apps-dropdown__description'
                >
                  {app.description}
                </Typography>
              </a>
            );
          })}
        </div>

        {!!applications?.length && (
          <div className='houston-topbar-apps-dropdown__expand'>
            <span onClick={toggleExpanded}>
              <ExpandIcon /> Expandir
            </span>
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

export default styled(AppsDropdown, { label: 'houston-topbar-apps-dropdown' })(
  ({ theme }) => css`
    width: ${TOPBAR_DROPDOWN_WIDTH}px;
    position: fixed;
    padding: ${theme.spacing.nano};
    background: #fff;
    box-shadow: ${theme.shadow.level[1]};
    top: ${TOPBAR_HEIGHT}px;
    left: 0;
    border-radius: 0 0 ${theme.spacing.nano} ${theme.spacing.nano};
    z-index: 105;
    transition: 0.15s ease-in-out;
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

    .houston-topbar-apps-dropdown__header {
      display: none;
    }

    .houston-topbar-apps-dropdown__list-apps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: ${theme.spacing.nano};
      flex-wrap: wrap;
      justify-items: center;
      box-sizing: border-box;

      .houston-topbar-apps-dropdown__loader {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 4;
        padding: ${theme.spacing.md};
      }

      .houston-topbar-apps-dropdown__item {
        width: 100%;
        text-align: center;
        transition: 0.15s ease-out;
        border-radius: ${theme.spacing.quarck};
        text-decoration: none;
        cursor: pointer;
        text-decoration: none;
        padding: ${theme.spacing.xxxs} ${theme.spacing.nano};
        display: block;

        .houston-topbar-apps-dropdown__icon {
          max-width: 40px;
          max-height: 40px;
          margin-bottom: ${theme.spacing.quarck};
        }

        .houston-topbar-apps-dropdown__description {
          display: none;
          overflow: hidden;
          animation-delay: 0.15s;
          animation: ${descriptionAnimation} 0.15s ease-in-out;
        }

        &.--current {
          background: rgba(0, 0, 0, 0.04);
        }

        &:hover {
          background: rgba(0, 0, 0, 0.04);
        }
      }
    }

    .houston-topbar-apps-dropdown__expand {
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
      left: 0;
      height: calc(100% - ${TOPBAR_HEIGHT}px);
      padding: ${theme.spacing.sm};
      overflow-x: auto;

      ${theme.breakpoints.down('md')} {
        padding: ${theme.spacing.xxxs};
      }

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.nano};
      }

      .houston-topbar-apps-dropdown__header {
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

        .houston-topbar-apps-dropdown__title {
          color: #37474f;
          font-weight: 500;
        }

        .houston-topbar-apps-dropdown__button-close {
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

      .houston-topbar-apps-dropdown__list-apps {
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

      .houston-topbar-apps-dropdown__item {
        text-align: left;
        padding: ${theme.spacing.xxs};

        .houston-topbar-apps-dropdown__icon {
          margin: auto;
          margin-bottom: ${theme.spacing.nano};
          text-align: center;
          max-width: 80px;
          max-height: 80px;
          display: block;
        }

        .houston-topbar-apps-dropdown__description {
          display: block;
        }
      }

      .houston-topbar-apps-dropdown__expand {
        display: none;
      }
    }
  `
);
