import * as React from 'react';

import styled, { css, cx, IStyledProp, CSSInterpolation } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Button from './Button';
import Content from './Content';
import Icon from './icons';
import Title from './Title';

export type AlertTypes = 'informative' | 'positive' | 'negative' | 'warning';

export type IconMap = { [key in AlertTypes]: JSX.Element };

export interface IAlertProps {
  /**
   * Default `informative`
   */
  type?: AlertTypes;
  /**
   * Show icon close.
   * Default `true`
   */
  closeIcon?: boolean;
  visible?: boolean;
  onClose?: () => void;
}

export interface IAlertInterface extends IAlertProps, React.HTMLAttributes<HTMLDivElement>, IStyledProp {}

const IconMap: IconMap = {
  informative: <Icon.Informative />,
  positive: <Icon.Positive />,
  negative: <Icon.Warning />,
  warning: <Icon.Warning />
};

const Alert = React.forwardRef<HTMLDivElement, IAlertInterface>(
  ({ className, type = 'informative', closeIcon = true, visible: visibleProp, onClose, children, ...rest }, ref) => {
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

        <div className='__content'>{children}</div>

        {closeIcon && (
          <span role='img' className='__close-icon' onClick={handleClose}>
            <Icon.Close />
          </span>
        )}
      </div>
    );
  }
);

const AlertWrapper = styled(Alert, { label: 'houston-alert' })`
  ${({ theme }) => {
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

      ${modifiersTypes}

      &.--close-icon {
        .__content .__action {
          ${theme.breakpoints.down('md')} {
            width: calc(100% + 1.5rem);
          }
        }
      }

      .__icon {
        line-height: 0;
        margin-top: 1px;
        margin-right: ${theme.spacing.inline.xxxs};

        ${theme.breakpoints.down('md')} {
          display: none;
        }
      }

      .__content {
        flex: 1;
        position: relative;

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

      .__close-icon {
        line-height: 0;
        margin-left: ${theme.spacing.inline.xxxs};
        cursor: pointer;
        margin-top: 4px;

        svg {
          fill: ${theme.neutralColor.low.pure};
        }

        ${theme.breakpoints.down('md')} {
          margin-left: ${theme.spacing.inline.nano};
        }
      }
    `;
  }}
`;

export default nestedComponent(AlertWrapper, {
  Title,
  Content,
  Button
});
