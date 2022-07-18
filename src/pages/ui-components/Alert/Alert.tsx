import * as React from 'react';

import styled, { css, cx, StyledProp, CSSInterpolation } from '@eduzz/houston-styles';

import Button, { ButtonProps } from '../Button';
import Typography from '../Typography';
import Icon from './icons';

export type AlertTypes = 'informative' | 'positive' | 'negative' | 'warning';

export type IconMap = Record<AlertTypes, JSX.Element>;

export type AlertTag = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

export type AlertAction = Omit<ButtonProps, 'children'> & { text: React.ReactNode };

export interface AlertProps {
  /**
   * Alert status
   * Default `informative`
   */
  type?: AlertTypes;
  /**
   * Show icon close
   * Default `true`
   */
  closeIcon?: boolean;
  /**
   * Display control
   * Default `true`
   */
  visible?: boolean;
  title?: React.ReactNode;
  /**
   * Call to action (CTA)
   */
  actionProps?: AlertAction;
  onClose?: (ev: React.MouseEvent<HTMLSpanElement>) => void;
}

export interface AlertInterface extends AlertProps, AlertTag, StyledProp {}

const IconMap: IconMap = {
  informative: <Icon.Informative />,
  positive: <Icon.Positive />,
  negative: <Icon.Warning />,
  warning: <Icon.Warning />
};

const CLOSE_ICON_SIZE = 16;

const Alert = React.forwardRef<HTMLDivElement, AlertInterface>(
  (
    {
      className,
      type = 'informative',
      closeIcon = true,
      visible: visibleProp,
      onClose,
      children,
      title,
      actionProps = {},
      ...rest
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    const controlled = visibleProp !== undefined;
    const isVisible = controlled ? visibleProp : visible;
    const { text: buttonText, ...buttonProps } = actionProps;

    const handleClose = React.useCallback(
      (event: React.MouseEvent<HTMLSpanElement>) => {
        if (!controlled) {
          setVisible(false);
        }

        onClose && onClose(event);
      },
      [controlled, onClose]
    );

    if (!isVisible) {
      return null;
    }

    return (
      <div {...rest} ref={ref} role='alert' className={cx(className, `--type-${type}`, { '--close-icon': closeIcon })}>
        <span role='img' className='__icon'>
          {IconMap[type]}
        </span>

        <div className='__wrapper'>
          <div className='__content'>
            {title && (
              <Typography
                color='neutralColor.low.pure'
                weight='semibold'
                size='md'
                lineHeight='default'
                className='__title'
              >
                {title}
              </Typography>
            )}

            <Typography.Paragraph color='neutralColor.low.pure' size='sm' lineHeight='lg'>
              {children}
            </Typography.Paragraph>
          </div>

          {!!buttonText && (
            <div className='__action'>
              <Button {...buttonProps}>{buttonText}</Button>
            </div>
          )}
        </div>

        {closeIcon && (
          <span role='button' className='__close' onClick={handleClose}>
            <Icon.Close />
          </span>
        )}
      </div>
    );
  }
);

export default styled(Alert, { label: 'houston-alert' })`
  ${({ theme }) => {
    const mobileSpacingCloseIcon = theme.remToPx(theme.cleanUnit(theme.spacing.inline.nano)) + CLOSE_ICON_SIZE;
    const modifiersTypes: CSSInterpolation[] = [];

    Object.keys(theme.feedbackColor).forEach(key =>
      modifiersTypes.push(css`
        &.--type-${key} {
          background-color: ${theme.feedbackColor[key].light};

          .__icon svg {
            fill: ${theme.feedbackColor[key].pure};
          }
        }
      `)
    );

    return css`
      padding: ${theme.spacing.inset.sm};
      border-radius: ${theme.border.radius.sm};
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      position: relative;

      ${theme.breakpoints.down('md')} {
        padding: ${theme.spacing.inset.xs};
      }

      ${theme.breakpoints.down('md')} {
        &.--close-icon {
          .__content {
            margin-right: ${theme.pxToRem(mobileSpacingCloseIcon)}rem;
          }

          .__close {
            position: absolute;
            top: ${theme.spacing.inset.xs};
            right: ${theme.spacing.inset.xs};
            z-index: 2;
          }
        }
      }

      ${modifiersTypes}

      .__icon {
        line-height: 0;
        margin: ${theme.pxToRem(2)}rem ${theme.spacing.inline.xxxs} 0 0;

        ${theme.breakpoints.down('md')} {
          display: none;
        }
      }

      .__wrapper {
        flex: 1;

        .__title {
          margin-bottom: ${theme.spacing.stack.xxxs};

          ${theme.breakpoints.down('md')} {
            margin-bottom: ${theme.spacing.stack.nano};
            font-size: ${theme.font.size.sm};
          }
        }

        .__action {
          margin-top: ${theme.spacing.stack.xxxs};

          ${theme.breakpoints.down('md')} {
            margin-top: ${theme.spacing.stack.xxs};

            button {
              width: 100%;
            }
          }
        }
      }

      .__close {
        line-height: 0;
        margin: ${theme.pxToRem(4)}rem 0 0 ${theme.spacing.inline.xxxs};
        cursor: pointer;

        svg {
          fill: ${theme.neutralColor.low.pure};
        }
      }
    `;
  }}
`;
