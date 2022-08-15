import * as React from 'react';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import CancelIcon from '@eduzz/houston-icons/Cancel';
import ExpandIcon from '@eduzz/houston-icons/Expand';
import styled, { css, StyledProp, cx, keyframes } from '@eduzz/houston-styles';

import { TopbarApplication } from '..';
import Button from '../../../../Button';
import Divider from '../../../../Divider';
import IconButton from '../../../../IconButton';
import Spinner from '../../../../Loaders/Spinner';
import Typography from '../../../../Typography';
import { TOPBAR_DROPDOWN_WIDTH, TOPBAR_HEIGHT, TOPBAR_HEIGHT_MOBILE } from '../../../context';

export interface AppsDropdownProps extends StyledProp {
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
          <Typography weight='bold'>Lista de Apps</Typography>

          <IconButton onClick={toggleExpanded}>
            <CancelIcon />
          </IconButton>
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

                <Typography
                  lineHeight='default'
                  className='houston-topbar-apps-dropdown__label'
                  size={expanded ? 'xs' : 'xxs'}
                >
                  {app.label}
                </Typography>
                <Typography
                  size='xs'
                  color='neutralColor.low.medium'
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
            <Divider />

            <div className='houston-topbar-apps-dropdown__expand-button'>
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

const descriptionAnimation = keyframes`
0% { text-indent: -1000px; }
  100% {  text-indent: 0px; }
`;

export default styled(AppsDropdown, { label: 'houston-topbar-apps-dropdown' })(
  ({ theme }) => css`
    width: ${TOPBAR_DROPDOWN_WIDTH}px;
    position: fixed;

    background: #fff;
    box-shadow: ${theme.shadow.level[2]};
    top: ${TOPBAR_HEIGHT}px;
    left: ${theme.spacing.inline.nano};
    border-radius: ${theme.border.radius.sm};
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
      top: ${TOPBAR_HEIGHT_MOBILE}px;
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
      padding: ${theme.spacing.xxxs};

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
        border-radius: ${theme.border.radius.xs};
        cursor: pointer;
        text-decoration: none;
        padding: ${theme.spacing.xxxs} ${theme.spacing.nano};
        display: block;

        .houston-topbar-apps-dropdown__icon {
          max-width: 40px;
          max-height: 40px;
          margin-bottom: ${theme.spacing.nano};
        }

        .houston-topbar-apps-dropdown__description {
          display: none;
          overflow: hidden;

          ${theme.breakpoints.up('md')} {
            text-indent: -1000px;
            animation: ${descriptionAnimation} 0.2s ease-in-out forwards;
            animation-delay: 0s;
          }
        }

        &.--current {
          background: rgba(0, 0, 0, 0.04);
        }

        &:hover {
          background: rgba(0, 0, 0, 0.04);
        }
      }
    }

    .houston-topbar-apps-dropdown__expand .houston-topbar-apps-dropdown__expand-button {
      margin: ${theme.spacing.nano};
    }

    &.--expanded {
      width: 100%;
      left: 0;
      height: calc(100% - ${TOPBAR_HEIGHT}px);
      overflow-x: auto;
      box-shadow: none;
      border-radius: 0;

      .houston-topbar-apps-dropdown__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 ${theme.spacing.nano} 0 ${theme.spacing.xxxs};
        border-bottom: ${theme.border.width.xs} solid
          ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
      }

      .houston-topbar-apps-dropdown__expand {
        display: none;
      }

      .houston-topbar-apps-dropdown__list-apps {
        padding: 0;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0;

        .houston-topbar-apps-dropdown__item {
          height: 100%;
          display: grid;
          grid-template-columns: 25px 1fr;
          grid-template-rows: 25px auto;
          grid-gap: ${theme.spacing.nano};
          text-align: left;
          padding: ${theme.spacing.xxs};
          border-bottom: ${theme.border.width.xs} solid
            ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
          align-items: center;

          .houston-topbar-apps-dropdown__icon {
            max-width: 25px;
            max-height: 25px;
            grid-column: 1;
            grid-row: 1;
            margin-bottom: 0;
          }

          .houston-topbar-apps-dropdown__label {
            grid-column: 2;
            grid-row: 1;
          }

          .houston-topbar-apps-dropdown__description {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row: 2;
            display: block;
          }
        }

        ${theme.breakpoints.up('md')} {
          padding: ${theme.spacing.xxs};
          grid-template-columns: repeat(2, 1fr);
          grid-gap: ${theme.spacing.xxs};

          .houston-topbar-apps-dropdown__item {
            margin: auto;
            border: ${theme.border.width.xs} solid
              ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
            grid-template-columns: 60px 1fr;
            grid-template-rows: 20px auto;
            padding: ${theme.spacing.xxxs};
            grid-gap: ${theme.spacing.quarck};
            align-items: start;

            .houston-topbar-apps-dropdown__icon {
              grid-row-start: 1;
              grid-row-end: 3;
              max-width: 50px;
              max-height: 50px;
            }

            .houston-topbar-apps-dropdown__description {
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
