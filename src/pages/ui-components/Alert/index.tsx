import * as React from 'react';

import styled, { css, cx, IStyledProp, CSSInterpolation } from '@eduzz/houston-styles';

import Button, { IButtonProps } from '../Button';
import Typography from '../Typography';
import Icon from './icons';

export type AlertTypes = 'informative' | 'positive' | 'negative' | 'warning';

export type IconMap = Record<AlertTypes, JSX.Element>;

export type AlertTag = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

export interface IAlertProps {
  /**
   * Default `informative`
   */
  type?: AlertTypes;
  /**
   * Show icon close
   * Default `true`
   */
  closeIcon?: boolean;
  /**
   * Default `true`
   */
  visible?: boolean;
  title?: React.ReactNode;
  /**
   * Call to action (CTA)
   */
  actionText?: React.ReactNode;
  actionProps?: IButtonProps;
  onClose?: () => void;
}

export interface IAlertInterface extends IAlertProps, AlertTag, IStyledProp {}

const IconMap: IconMap = {
  informative: <Icon.Informative />,
  positive: <Icon.Positive />,
  negative: <Icon.Warning />,
  warning: <Icon.Warning />
};

const CLOSE_ICON_SIZE = 16;

const Alert = React.forwardRef<HTMLDivElement, IAlertInterface>(
  (
    {
      className,
      type = 'informative',
      closeIcon = true,
      visible: visibleProp,
      onClose,
      children,
      title,
      actionText,
      actionProps,
      ...rest
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    const controlled = visibleProp !== undefined;

    const handleClose = React.useCallback(() => {
      if (!controlled) {
        setVisible(false);
      }

      onClose && onClose();
    }, [controlled, onClose]);

    if ((!controlled && !visible) || (controlled && !visibleProp)) {
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
              <div className='__title'>
                <Typography.Heading color='neutralColor.low.pure' as='h5' lineHeight='default'>
                  {title}
                </Typography.Heading>
              </div>
            )}

            <Typography.Paragraph color='neutralColor.low.pure' size='sm' lineHeight='lg'>
              {children}
            </Typography.Paragraph>
          </div>

          {actionText && (
            <div className='__action'>
              <Button {...actionProps}>{actionText}</Button>
            </div>
          )}
        </div>

        {closeIcon && (
          <span role='img' className='__close' onClick={handleClose}>
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
